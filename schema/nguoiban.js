var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: String,
    hoten: String,
    employeeIDCreateAcc: String,
    diachi: String,
    sdt: String,
    email: String,
    id_xe: String
});

var nguoiban = mongoose.model('nguoiban', schema);
module.exports = nguoiban;