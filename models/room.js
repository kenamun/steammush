var mongoose = require('mongoose');


 
var room = mongoose.Schema({
  	'name': { type: String },
    'description': { type: String },
    'outcomes': [{toRoom: String, exit: String}]
  });

  room.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });
	
    module.exports = mongoose.model('room', room);
