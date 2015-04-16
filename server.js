'use strict';

var express = require('express');
//grabs it from package.json
//any time you need to get something from another file, use require & module.export statement

var app = express();
//middleware added pieces of functionality
app.use(express.static(__dirname + '/public'));

app.get('/secret', function(request, response) {
  response.status(200).send('<h1>Oh no you found out my secret lulz</h1>');


});

// app.get('/*', function (req,res){
//   res.status(404).send('could not find page');
// })

// app.get('/greet/:person', function(req,res){
//   res.send('<h1>Hello '+ req.params.person + '</h1>');
// })


app.listen(process.env.PORT || 5000, function (){
  console.log('server running');
});
