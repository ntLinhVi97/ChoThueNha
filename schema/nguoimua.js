var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: String,
    hoten: String,
    employeeIDCreateAcc: String,
    diachi: String,
    sdt: String,
    email: String,
    yeucau: String
});

var nguoimua = mongoose.model('nguoimua', schema);
module.exports = nguoimua;