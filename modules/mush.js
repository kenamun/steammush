/**
 * @fileOverview
 * This the file that is run when you want to start mush.js.
 * Here, we set up the database collections and then start the
 * server.
 */
'use strict';           // Forces better usage of JavaScript.
var async = require('async');
var Server = require('./server').Server;

/**
 * Start the mush.
 */
function startTheMush() {
    // at this point, the db is connected
    log.info('Starting server.');
    assert.ok(mush);
    global.mush.Server = new Server();
    global.mush.Server.start();
}

/**
 * If we have to create a new db, we seed it with a room The Void (#0) and God (#1).
 * @param {Function} cb Callback of type fn(Error)
 */
function seedDb(cb) {
    // Check for start room.  If it doesn't exist?  Let's make it!  And add in a wizard.
    log.info('Count of rooms: ' + mush.db.collection('rooms').count())
    mush.db.collection('rooms').count({}, function(err, c) {
        if(c == 0)
            return cb();
    });
    log.info('Creating void and god.');
     async.parallel([
            mush.Factory.createTheVoid(),
            mush.Factory.createGod()
        ],
        function(err) {
            if (err) {
                console.error(err);
                process.exit(2);
                return;
            }
            log.info('Finished creating god and void.');
            cb();
        }
    );
    
    cb();
}

/**
 * sets up the global mush object, which has the config and db objects.
 * After this function global.mush will be just mush.
 */
function main() {
    // execute a set of function sequentially, and then execute the callback
    // which is an anonymous function that starts the mush.
    async.series([
            seedDb
        ],
        function(err) {
            if (err) {
                console.error(err);
                return;
            }
            startTheMush();
        }
    );
}

module.exports = { main: main };