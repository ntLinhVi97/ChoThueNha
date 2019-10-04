var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: String,
    id_nguoiban: String,
    id_nguoiban: String,
    id_nhanvienduyet: String,
    loaixe: String,
    gia: String,
    ngaygiaodich: String,
    id_xe: String
});

var giaodich = mongoose.model('giaodich', schema);
module.exports = giaodich;