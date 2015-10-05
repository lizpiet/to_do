var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/to_do');
var path = require('path');
var list = mongoose.model('todo', {name:String});


router.get('/', function( req, res, next){
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.post('/add', function(request, response, next){
    var addOns = new list({name:request.body.name});
    addOns.save(function(err){
        if(err)console.log("meow%s", err);
        response.send(addOns.toJSON());
        next();
    });
});

router.get('/todo', function(req, res, next){
    return list.find({}).exec(function(err, cats){
        if(err)throw new Error(err);
        response.send(JSON.stringify(todo));
        next();
    });
});

module.exports = router;
