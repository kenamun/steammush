/**
 * @fileOverview
 * This file sets up the global environment.
 */

'use strict';           // Forces better usage of JavaScript.
var Config = require('config-js');
var path = require('path');
var mongoose = require('mongoose');



module.exports = setGlobalEnv;

/**
 * save the db connection to the global mush object.
 * @param {Function} cb A callback to signal the work is done
 */
function connectToDb(cb) {
    var url = 'mongodb://localhost/mush_production';
   mongoose.connect(url);
   var db = mongoose.connection;
   log.info('url: ' + url);
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', function() {
     global.mush.db = db;
     global.validId = mush.db.validId;
     if (cb)
       cb();    
   });
   log.info("connectToDb finish");
        
}

function setGlobalEnv(cb) {

    // set up some global objects
    global.mush = {};

    // create the global config object
    var configFilePath = path.join(__dirname, '../cfg/mush_config_production.js');
    global.mush.config = new Config(configFilePath, 'us');

    global.util = require('util');
    global.inspect = global.util.inspect;
    global.assert = require('assert');
    global.mush_utils = require('./mush_utils');
    global.mush.Factory = require('./factory')();
    global.log = mush_utils.createLogger();
    global.is = require('is2');
    global.mush.PlayerDir = require('./player_dir')();
    connectToDb(cb);
}