var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../models/userModel');

module.exports = function(){
    passport.use(new TwitterStrategy({
        consumerKey: '8m8yYZ2fQcNRD2GKSEFQnDFGv',
        consumerSecret: 'NOmmY9DtRmjsBZO9kUhlMe4KGt2VhnE7iiprR8zxfyYdhZE6hd',
        callbackURL: 'http://localhost:3000/auth/twitter/callback',
        passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done){
          console.log(profile);
          if(req.user){
           var query = {};
           if(req.user.google){
               console.log('google');
               var query = {'google.id': req.user.google.id};
           }else if(req.user.facebook){
            console.log('facebook');
            var query = {'facebook.id': req.user.facebook.id};
           }
           User.findOne(query, function(error, user){
                console.log(error);
                console.log(user);
                user.twitter = {};
                   user.twitter.id = profile.id;
                   user.twitter.token = accessToken;
                   user.save();
                   done(null, user);
           });
          }else {
            var query = {'twitter.id': profile.id};
            User.findOne(query, function(error, user){
                  if(user){
                   console.log('Found twitter ID');
                   done(null, user);
                  }else{
                   var user = new User;
                   user.image = profile.photos[0].value;
                   user.displayName = profile.displayName;
                   user.twitter = {};
                   user.twitter.id = profile.id;
                   user.twitter.token = accessToken;
                   user.save();
                   done(null, user);
                  }
            }); 
          }           
    }));
};