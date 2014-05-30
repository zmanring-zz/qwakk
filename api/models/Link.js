/**
 * Link
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

  	/* e.g.
  	nickname: 'string'
  	*/

    description: {
      type: 'string',
      required: true
    },
    url: {
      type: 'url',
      required: true
    },
    private: 'boolean',
    tags: [
      'string'
    ]

  }

};
