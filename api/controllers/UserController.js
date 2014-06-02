/**
* UserController
*
* @module      :: Controller
* @description	:: A set of functions called `actions`.
*
*                 Actions contain code telling Sails how to respond to a certain type of request.
*                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
*
*                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
*                 and/or override them with custom routes (`config/routes.js`)
*
*                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
*
* @docs        :: http://sailsjs.org/#!documentation/controllers
*/

var bcrypt = require('bcrypt');

module.exports = {

  index: function (req, res, next) {

    if (req.session.authenticated) {
      return res.redirect('/user/profile/');
    }

    res.view();

  },

  profile: function (req, res, next) {

    if (req.session.authenticated) {
      return res.view({
        user: req.session.user
      });
    }

    res.redirect('/');

  },

  new: function (req, res, next) {
    res.locals.flash = _.clone(req.session.flash);
    console.log(res.locals.flash);
    res.view();
    req.session.flash = {};
  },

  create: function (req, res, next) {

    User.create( req.params.all(), function userCreated(err, user) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/user/new');
      }

      res.json(user);
      req.session.flash = {};

      // Redirect to the profile page
      res.redirect('/user/profile/' + user.id);

    });

  },

  login: function(req, res, next) {

    var values = req.params.all();

    User.findOneByUsername(values.username, function(err, user) {
      if (err) return next(err);

      if (!user) {
        // handle if there is no user
        res.redirect('/');
      }

      bcrypt.compare(values.password, user.encryptedPassword, function(err, valid) {

        if (valid) {
          // you are logged in
          console.log('you have successfully logged in:', user);

          //set session
          req.session.authenticated = true;
          req.session.user = user;

          res.redirect('/user/profile/');

        }

      });

    });

  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UsersController)
   */
  _config: {

  }


};
