'use strict'

//creating app function

module.exports = function(app){
    var articleList = require ('../controllers/articleController');

//import middleware for aunthetication

    var userManager = require('../controllers/authController')

//import middleware for validation

    const {validate} = require ('../middleware/middlewareValidation')

//import middleware for article validation

   const validation = require ('../middleware/articleValidation')

    //articleList Routes

    //get and post routes for articles endpoints

    app
    .route("/articles/all")
    .get(articleList.listAllArticles)
    app
    .route("/articles/create")
    .post([validate(validation.articleValidation)], articleList.createNewArticle);

    
    //put and delete request for articles endpoints

    app
    .route("/article/edit/:id")
    .patch([validate(validation.articleValidation)],articleList.updateArticle)

    app.route("/article/remove/:id").delete(articleList.deleteArticle);
};