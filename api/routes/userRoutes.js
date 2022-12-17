'use strict'

// create App function

module.exports = function(app){

    // import aunthetication middleware
    
    var userManager = require('../controllers/authController');

    //get and post requests for user endpoints

    app
    .route('/all/users')
    .get([userManager.loginRequired], userManager.getAllUsers)

    //post request for user registration

    app
    .route('user/authorise')
    .post(userManager.signUp);

    //post request for user login

    app
    .route('user/log_in')
    .post(userManager.logIn);
};