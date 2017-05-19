var mongoose = require('mongoose');


 
var room = mongoose.Schema({
  	'name': { type: String },
    'description': { type: String },
    'exits': [{toRoom: String, exitName: String}],
    'roomNo': { type: String },
    'inventory': [itemID: type: mongoose.Schema.Types.ObjectId, ref: 'item']
    
  });

  room.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });
	
    module.exports = mongoose.model('room', room);
