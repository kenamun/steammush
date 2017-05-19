var bcrypt   = require('bcrypt-nodejs');
var mongoose = require('mongoose');


 
var player = mongoose.Schema({
	  'name': { type: String, index: { unique: true } },
    'email': { type: String },
    'role': Number,
    'password': String,
	 'lastLogin': Date
  });

  player.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });
	

    // methods ======================
    // generating a hash
    player.methods.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // checking if password is valid
    player.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
    
    module.exports = mongoose.model('player', player);
