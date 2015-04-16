'use strict';

var express = require('express');
//grabs it from package.json
//any time you need to get something from another file, use require & module.export statement

var app = express();
//middleware added pieces of functionality
app.use(express.static(__dirname + '/public'));

// app.get('/greet', function(request, response) {
//   response.status(200).send('<h1>Hello Stranger!</h1>');

  //can only use one .send in our programs

});

// app.get('/*', function (req,res){
//   res.status(404).send('could not find page');
// })

// app.get('/greet/:person', function(req,res){
//   res.send('<h1>Hello '+ req.params.person + '</h1>');
// })


app.listen(process.env.PORT || 3000, function (){
  console.log('server running');
});