var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: String,
    hoten: String,
    bophan: String
});

var nhanvien = mongoose.model('nhanvien', schema);
module.exports = nhanvien;