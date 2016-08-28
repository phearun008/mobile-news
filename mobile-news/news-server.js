var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/resources', express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "news.html" );
})


app.listen(PORT, function () {
  var host = this.address().address
  console.log("Example app listening at http://%s:%s", host, PORT)
})