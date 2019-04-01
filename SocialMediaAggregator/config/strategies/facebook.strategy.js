var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../models/userModel');

module.exports = function(){
    passport.use(new FacebookStrategy({
        clientID: 'CLIENTID',
        clientSecret: 'clientsecret',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done){
         if(req.user){
            var query = {};
            if(req.user.google){
                console.log('google');
                query = {'google.id':req.user.google.id};
            }
            else if(req.user.twitter){
                console.log('twitter');
                query = {'twitter.id': req.user.twitter.id};
            }
            User.findOne(query, function(error, user){
                user.facebook = {};
                user.facebook.id = profile.id;
                user.facebook.token = accessToken;
                user.save();
                done(null, user);
            });
         }else{
            var query = {'facebook.id': profile.id};
            User.findOne(query, function(error, user){
              if(user){
                  console.log('Found facebook id already!');
                  done(null, user);
              }else{
                  var user = new User;
                  user.displayName = profile.displayName;
                  user.facebook = {};
                  user.facebook.id = profile.id;
                  user.facebook.token = accessToken;
                  user.save();
                  done(null, user);
              }
            });
         }
          
    }));
};
