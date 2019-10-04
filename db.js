var mongoose = require ("mongoose");

var uristring = "mongodb+srv://pxvu97:qweqwe123@cluster0-qvjiz.mongodb.net/qlxc?retryWrites=true&w=majority";

mongoose.connect(uristring, { useNewUrlParser: true }, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports = mongoose;