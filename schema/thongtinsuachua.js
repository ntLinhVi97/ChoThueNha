var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: String,
    id_xe: String, 
    id_nhanviensuaxe: String,
    tinhtrang: String,
    gia: String,
    chitiet: String
});

var thongtinsuachua = mongoose.model('thongtinsuachua', schema);
module.exports = thongtinsuachua;