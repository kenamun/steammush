var mongoose = require('mongoose');


 
var item = mongoose.Schema({
	  'name': { type: String }
  });

  item.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });
	
	  
    module.exports = mongoose.model('item', item);
