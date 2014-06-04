/**
* User
*
* @module      :: Model
* @description :: A short summary of how this model works and what it represents.
* @docs		:: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  schema: true,

  attributes: {

  	/* e.g.
  	nickname: 'string'
  	*/
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    encryptedPassword: {
      type: 'string'
    },
    links: [{

      id: 'string',
      title: 'string',
      description: {
        type: 'string',
        limit: 140
      },
      tags: {
        type: 'array'
      }

    }],

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encryptedPassword;
      delete obj._csrf;
      return obj;
    }
  },

  beforeCreate: function(values, next) {
    if (!values.password || values.password != values.confirmation) {
      return next({err: ["Password doesn't match the confirmation value."]});
    }

    bcrypt.hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if (err) return next(err);
      values.encryptedPassword = encryptedPassword;
      next();
    });
  }

};
