var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../../models/userModel');

module.exports = function (){

    passport.use(new GoogleStrategy({
        clientID: '580850206215-2tv7u3jkelrnfhfva1n0bru7rtclvhs7.apps.googleusercontent.com',
        clientSecret: 'ZeOyeQE0t3v7ACFUF-8RDOC4',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        tokenURL: 'https://oauth2.googleapis.com/token'},
        function(req, accessToken, refreshToken, profile, done){
          console.log(profile);
          var user ={};
          var query = {'google.id': profile.id};
          User.findOne(query, function(error, user){
            if(user){
              console.log('found');
              done(null, user);
            }else {
              console.log('not found so creating a new one');
              var user = new User;
              user.email = profile.emails[0].value;
              user.image = profile._json.picture;
              user.displayName = profile.displayName;
              user.google = {};
              user.google.id = profile.id;
              user.save();
              done(null, user);
            }
          });        
        }
      ));
};