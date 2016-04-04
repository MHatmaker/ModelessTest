var express = require('express');
var router = express.Router();
console.log("add templates to router");

/* GET users listing. */
router.get('/templates', function(req, res, next) {
    // res.send('respond with a resource');

    console.log("exports.templates");
    var name = req.params.name;
    console.log(name);
    // res.render('templates/' + name + '.jade');
    res.render('templates/' + name);
});

module.exports = router;
