# SocialAggregator-OAUTH
#### This is a simple webpage to demostrate the OAUTH setup using Passport

### Following libraries are used to setup the sample application:
- Used Express library 
- Used EJS for quickly building front end with JS
- Used passport library to manage the OAUTH process
- Used following strategies library for login
  - passport-facebook
  - passport-google-oauth
  - passport-twitter
- Used Mongoose to save the users using User schema model

### Steps involved
- Configuring passport
  - Setup passport using NPM command
  - Import passport into express (app.js)
  - Do initialize(), session(), serializeUser() and deserializeUser()
  - import all three strategies (google, twitter and facebook )
- Pre setup for authorization to get ClientID, Secret and setup Callback/Redirect URL
  - Visit https://console.developers.google.com/ to setup the authentication and use Googleplus API
  - Visit https://developers.facebook.com/ to setup the authentication
  - Visit https://developer.twitter.com/ to setup the authentication
- Configuring the strategies
  - Refer to Facebook.strategy.js 
  - Refer to Google.strategy.js
  - Refer to Twitter.strategy.js

### Login
 ![image](https://github.com/krishnakishorep/Social-AggregatorUsingOAUTH/blob/master/ScreenShots/HomePage.PNG)
 
### Consent 
![image](https://github.com/krishnakishorep/Social-AggregatorUsingOAUTH/blob/master/ScreenShots/ConscentScreen.PNG)

### Redirect Page
![image](https://github.com/krishnakishorep/Social-AggregatorUsingOAUTH/blob/master/ScreenShots/Loggedin.PNG)

### After logged in via Facebook and Twitter
![image](https://github.com/krishnakishorep/Social-AggregatorUsingOAUTH/blob/master/ScreenShots/AggregatedLogin.PNG)

### User record in MongoDB
![image](https://github.com/krishnakishorep/Social-AggregatorUsingOAUTH/blob/master/ScreenShots/UserInMongo.PNG)

