/**
 * @fileOverview
 * Given raw obj from the db, constructs the correct game object type.
 */

'use strict';
var Obj = require('./object');
var PlayerSchema = require('../models/player');
var RoomSchema = require('../models/room');


var FactoryInst;

module.exports = function() {
    if (FactoryInst)
        return FactoryInst;
    FactoryInst = new Factory();
    return FactoryInst;
};

/**
 * Factory constructor
 */
function Factory() {
}

function createTheVoid() {
    // Setup initial variables
    var name = 'The Void';
    var description = 'A meaningless existance.';
    var roomNo = 'AD 00 00';
    
    var room = new RoomSchema({
        name: name,
        description: description,
        roomNo: roomNo
    })
    
    room.save(function(err){
        
    });
        
        item.save(function(err) {
           log.error("Error creating void room.");
        });
    
}

function createGod() {
    var god = new PlayerSchema();
    god.name = 'Admin';
    god.role = 4;
    god.password = god.generatehash('pass');
    
    god.save(function(err) {
       log.error("Error creating admin user."); 
    });
    
}