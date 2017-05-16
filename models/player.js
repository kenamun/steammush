var bcrypt   = require('bcrypt-nodejs');
var mongoose = require('mongoose');


 
var player = mongoose.Schema({
	  'name': { type: String, index: { unique: true } },
    'email': { type: String, index: { unique: true } },
    'role': String,
    'password': String,
	 'lastLogin': Date,
    'randomToken': String
  });

  player.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });
	
	player.virtual('admin').get(function() {
		if(role="admin")
		{
			return true;
		}
		else
		{
			return false;
		}
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
