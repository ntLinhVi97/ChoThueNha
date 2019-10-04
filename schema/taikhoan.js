var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: {type: String, unique: true},
    tendangnhap: {type: String, unique: true},
    matkhau: String,
    bophan: String
});

var taikhoan = mongoose.model('taikhoan', schema);
module.exports = taikhoan;