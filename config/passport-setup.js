const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').OAuthStrategy;

passport.use(new GoogleStrategy({
    consumerKey: '531195458568-quspm4j55vs2pjvskg3fbcjuqe0thh1r.apps.googleusercontent.com',
    consumerSecret: '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',
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));