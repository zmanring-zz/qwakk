/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

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
    links: [{

      url: 'string',
      tags: {
        type: 'array'
      },
      description: 'string',
      isPrivate: 'boolean',

    }]

  }

};
