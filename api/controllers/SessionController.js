/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  destroy: function(req, res) {
    req.session.destroy();
    res.redirect('/');
  }

};
