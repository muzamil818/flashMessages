var express = require('express');
var router = express.Router();

/* GET home page. */
var a ;
router.get('/', function(req, res, next) {

  // res.render('index');

    res.render('index');


  
});
router.get('/faild', function(req, res) {
  
    req.flash("age", 21)
  res.send(" i guess it is created")
});
router.get('/check', function(req, res) {
  
  console.log(req.flash("age"));
  res.send("check krlo bhai")
  
});

module.exports = router;
