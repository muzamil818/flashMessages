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
    username: "usman",
    nickname: "halo",
    discription: "you are talking with zaid nashai",

    catagory: ["ciggrete", "velo", "amna"],
  });

  res.send(userData)
});
// router.get("/find", async function(req, res){
// let regex = new RegExp ("^Muzamil$", "i")
//   const find = await users.find({username: regex});

//   res.send(find)
// })
router.get("/find", async function(req, res){
  // let regex = new RegExp ("^Muzamil$", "i")
  const find = await users.find();
  
  res.send(find)
})
router.get("/specific", async function(req, res){
  let date1 = new Date("2025-08-12")
  let date2 = new Date("2025-08-15")
  // const find = await users.find({catagory :{ $all: ["velo", "amna" ]}});
  const find = await users.find({datecreated: {$gte: date1, $lte: date2}})
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
