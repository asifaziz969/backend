var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});
//...................................
router.get('/create',  async function(req, res) {

const createduser=  await userModel.create({
  username: "asif969aziz",
  age: 22,
  name:" Asif"
});
res.send(createduser)

});
//.............................................
router.get('/allusers',  async function(req, res) {

const allusers=  await userModel.find();
res.send(allusers)
});

//.....................................
router.get('/oneuser',  async function(req, res) {

const oneuser=  await userModel.findOne({username:"asif969aziza"});
res.send(oneuser)
});
//........................................

router.get('/delete',  async function(req, res) {

  const oneuser=  await userModel.findOneAndDelete({username:"asif969aziza"});
  res.send(oneuser)
  });
module.exports = router;
