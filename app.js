var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
      res.render('index');
});

app.get('/robots.txt', function (req, res) {
      res.render('layouts/robots');
});

app.get('/mrw/class-is-done.gif', function (req, res) {
      res.redirect('https://www.google.com/search?q=party+gif&espv=2&biw=1440&bih=750&site=webhp&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjW673z9bHMAhXjrYMKHdeZAKAQ_AUIBigB#imgrc=Ce_kIijZDzXLIM%3A');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
