

exports.index = function(req, res){
    console.log("exports.index");
    res.render('grid');
};

exports.partials = function (req, res) {
    console.log("exports.partials");
    var name = req.params.name;
    console.log(name);
    res.render('partials/' + name);
};

exports.templates = function (req, res) {
    console.log("exports.templates");
    var name = req.params.name;
    console.log(name);
    res.render('templates/' + name + '.jade');
};
