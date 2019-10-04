var express = require('express');
var router = express.Router();
var uuid = require('uuid/v1')
var nhanvienCollection = require('../schema/nhanvien')
var nguoibanCollection = require('../schema/nguoiban')
var taikhoanCollection = require('../schema/taikhoan')
/* GET users listing. */

router.post('/', function (req, res, next) {
  var data = { //test data
    id: uuid(),
    tendangnhap: "abc",
    bophan: "tiepdon"
  }

  console.log(req.body.userNameSignUp); //khong lay duoc data len

  //luu vao table nao thi xai cai do
  taikhoanCollection.create(data, function (err, nhanvien) {
    if (err) {
      return console.log("error on saving doc")
    } else {
      res.send(nhanvien.id)
    }
  });
});

module.exports = router;