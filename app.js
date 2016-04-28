var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
      res.render('index');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
