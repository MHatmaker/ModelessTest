var express = require('express');
var router = express.Router();
console.log("fire up express router");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log("router.get / ");
  res.render('grid');
});
/*
router.get('/templates', function(req, res, next) {
    //exports.templates = function (req, res) {
    console.log("exports.templates");
    var name = req.params.name;
    console.log(name);
    // res.render('templates/' + name + '.jade');
    res.render('templates/' + name);
});

exports.templates = function (req, res) {
    console.log("exports.templates");
    var name = req.params.name;
    console.log(name);
    res.render('templates/' + name + '.jade');
};
*/
module.exports = router;
