// import article Model
const  Article = require("../models/articleModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllArticles function - To list all Articles
exports.listAllArticles = (req, res) => {
Article.find({}, (err, article ) => {
if (err) {
return res.status(500).send(err);
}
return res.status(200).json(article);
});
};
  

//createNewArticle function - To create new article

exports.createNewArticle = (req, res) => {
let  newArticle = new Article (req.body);
newArticle.save((err, article) => {
if (err) {
return res.status(500).send(err);
}
return res.status(201).json(article);
});
};



// updateArticle function - To update article status by id
exports.updateArticle = (req, res) => {
Article.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, article) => {
if (err) {
return res.status(500).send(err);
}
return res.status(200).json(article);
});
};

// deleteArticle function - To delete article by id
exports.deleteArticle = async ( req, res) => {
await  Article.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
res.status(404).send(err);
}else{
res.status(200).json({ message:"Article successfully deleted"});
}
});
};