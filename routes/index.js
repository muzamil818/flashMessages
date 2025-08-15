var express = require("express");
var router = express.Router();
const users = require("./users");
/* GET home page. */

router.get("/", function (req, res, next) {
  // res.render('index');

  res.render("index");
});

router.get("/create", async function (req, res) {
  const userData = await users.create({
    username: "muzamili",
    nickname: "halo",
    discription: "you are talking with zaid nashai",

    catagory: ["ciggrete", "velo", "naswat"],
  });

  res.send(userData)
});
// router.get("/find", async function(req, res){
// let regex = new RegExp ("^Muzamil$", "i")
//   const find = await users.find({username: regex});

//   res.send(find)
// })
router.get("/find", async function(req, res){
let regex = new RegExp ("^Muzamil$", "i")
  const find = await users.find({username: regex});

  res.send(find)
})
// router.get('/faild', function(req, res) {

//     req.flash("age", 21)
//   res.send(" i guess it is created")
// });
// router.get('/check', function(req, res) {

//   console.log(req.flash("age"));
//   res.send("check krlo bhai")

// });

module.exports = router;
