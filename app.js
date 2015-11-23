var express = require('express'),
    exphbs = require('express-handlebars'),
    bodyParser = require('body-parser'),
    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('./controllers'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
