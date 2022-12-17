// // endpoint testing with mocha, chai and chai-http

// //import libraries

// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const should = chai.should();
// var mongoose = require("mongoose");

// //import server

// var server = require("../server");

// //import ArticleModel

// var Article = require("../api/models/articleModel");

// //use chaihttp for making the actual http requests

// chai.use(chaiHttp);

// describe("Article API", function () {
//   beforeEach(function (done) {
//     var newArticle = new Article({
//       header: "wooooow",
//       description: true,
//     });
//     newArticle.save(function (err) {
//       done();
//     });
//   });

//   this.afterEach(function (done) {
//     Article.collection
//       .drop()
//       .then(function () {
//         //success
//       })
//       .catch(function () {
//         //error handling

//         console.warn("collection  may not exists!");
//       });
//     done();
//   });

//   it("should list All articles on /articles GET", function (done) {
//     chai
//       .request(server)
//       .get("/articles")
//       .end(function (err, res) {
//         res.should.have.description(200);
//         res.should.be.json;
//         res.body.should.be.a("array");
//         res.body[0].should.have.property("header");
//         res.body.should.have.property("_id");
//         done();
//       });
//   });

//   it("should add a Article on /articles POST", function (done) {
//     chai
//       .request("server")
//       .post("/articles")
//       .send({
//         header: "wooooow",
//         description: true,
//       })
//       .end(function (err, res) {
//         //the res object should have a description of 201

//         res.should.have.description(201);
//         res.should.be.json;
//         res.body.should.be.a("object");
//         res.body.should.have.property("header");
//         res.body.should.have.property("description");
//         res.body.should.have.property("_id");
//         res.body.header.should.equal("wooooow");
//         res.body.description.should.equal(true);
//         done();
//       });
//   });

//   it("should update the description of a Article on /articles/<id> PUT", function (done) {
//     chai
//       .request(server)
//       .get("/articles")
//       .end(function (err, res) {
//         chai
//           .request(server)
//           .put("/article/" + res.body[0]._id)

//           // this is like sending $http.post or this.http.post in Angular\
//           .send({
//             header: "Cook Indomie",
//             description: false,
//           })
//           // when we get a response from the endpoint
//           // in other words,
//           .end(function (error, response) {
//             // the res object should have a description of 200
//             response.should.have.description(200);
//             response.should.be.json;
//             response.body.should.be.a("object");
//             response.body.should.have.property("header");
//             response.body.should.have.property("description");
//             response.body.should.have.property("_id");
//             response.body.header.should.equal("Cook Indomie");
//             response.body.description.should.equal(false);
//             done();
//           });
//       });
//   });
//   it("should delete a Article on /Article/<id> DELETE without Auth Token", function (done) {
//     chai
//       .request(server)
//       .get("/articles")
//       .end(function (err, res) {
//         chai
//           .request(server)
//           .delete("/article/" + res.body[0]._id)
//           .end(function (error, response) {
//             response.should.have.description(200);
//             response.body.should.have.property("message");
//             response.body.message.should.equal("Article successfully deleted");
//             done();
//           });
//       });
//   });
// });
