require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const http = require('http');
const imageController = require('./controllers/imageController');
const cons = require('consolidate');

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var app = express();
//   app.use(bodyparser.urlencoded({
//         extended: true
//     }));
//   app.use(bodyparser.json());
//   app.set('views', path.join(__dirname, '/views/'));
//   app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
//   app.set('view engine', 'hbs');

//   res.end('Hello World\n');
// }).listen(1337, "127.0.0.1");
// console.log('Server running at http://127.0.0.1:1337/');


var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views/'));
app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, 'views'));
//app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'html');

var server = http.createServer(app);

//server.listen(8000,'192.168.137.50');   // IP in EXAM
server.listen(8888,'192.168.135.1');
// // server.listen(3000, '192.168.135.1');
// // () => {
// //     console.log('Express server started at port : 3000');
// // },);
//console.log(path)

app.use('/image', imageController);

