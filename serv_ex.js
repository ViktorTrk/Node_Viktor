// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })
 

// 	// add static files
// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port

//    console.log("Example app listening at http://%s:%s", host, port)

// })

 

 	//ser2 routing

//  var express = require('express');
// var app = express();

// // This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//    console.log("Got a GET request for the homepage");
//    res.send('Hello GET');
// })

// // This responds a POST request for the homepage
// app.post('/', function (req, res) {
//    console.log("Got a POST request for the homepage");
//    res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//    console.log("Got a DELETE request for /del_user");
//    res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', function (req, res) {
//    console.log("Got a GET request for /list_user");
//    res.send('Page Listing');
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })

// var server = app.listen(8081, function () {

//    var host = server.address().address
//    var port = server.address().port

//    console.log("Example app listening at http://%s:%s", host, port)
// })



		// Get Method form 

// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.get('/index_get.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index_get.htm" );
// })

// app.get('/process_get', function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)

// })


// upload

var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: '/tmp/'});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));


app.get('/index_get.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index_get.htm" );
})

app.post('/file_upload', upload.single('file'), function (req, res) {
   console.log(req.file.name);
   console.log(req.file.path);
   console.log(req.file.type);
   var file = __dirname + "/" + req.file.originalname;
   
   console.log("writing file called: ", file);

   fs.readFile( req.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log("error", err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename: file
               };
            }
         console.log( response )
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


// WRONG upload:

// var express = require('express');
// var app = express();
// var fs = require("fs");

// var bodyParser = require('body-parser');
// var multer  = require('multer');

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));

// app.get('/index.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.htm" );
// })

// app.post('/file_upload', function (req, res) {
//    console.log(req.files.file.name);
//    console.log(req.files.file.path);
//    console.log(req.files.file.type);
//    var file = __dirname + "/" + req.files.file.name;
   
//    fs.readFile( req.files.file.path, function (err, data) {
//       fs.writeFile(file, data, function (err) {
//          if( err ){
//             console.log( err );
//             }else{
//                response = {
//                   message:'File uploaded successfully',
//                   filename:req.files.file.name
//                };
//             }
//          console.log( response );
//          res.end( JSON.stringify( response ) );
//       });
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })