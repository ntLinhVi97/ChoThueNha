var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: String,
    tinhtrang: String,
    giamuathapnhat: String,
    giamuacaonhat: String,
    id_suachua: String,
    loai: String,
    biensoxe: String,
    giamua: String,
    machuxe: String
});

var xe = mongoose.model('xe', schema);
module.exports = xe;