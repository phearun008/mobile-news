var express = require('express');
var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/resources', express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "news.html" );
})


app.listen(3000, function () {
  var host = this.address().address
  var port = this.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})