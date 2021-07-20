'use strict'

// C library API
//const ffi = require('ffi-napi');

// Express App (Routes)
const express = require("express");
const app     = express();
const path    = require("path");
const fileUpload = require('express-fileupload');
const mysql = require('mysql2/promise');
console.log(__dirname);
// const cp = require('cookie-parser');
// app.use(cp());

// app.get('/set', (req, res) => {
//   //set the new style cookie
//   res.cookie()
// });

app.use(fileUpload());
//app.use(express.static(path.join(__dirname+'/uploads')));

// Minimization
const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');

// Important, pass in port as in `npm run dev 1234`, do not change
const portNum = process.argv[2];

// Send HTML at root, do not change
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

// Send Style, do not change
app.get('/style.css',function(req,res){
  //Feel free to change the contents of style.css to prettify your Web app
  res.sendFile(path.join(__dirname+'/public/style.css'));
});

// Send obfuscated JS, do not change
app.get('/index.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/index.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});

app.get('/explore.js',function(req,res){
  fs.readFile(path.join(__dirname+'/public/explore.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});



//sending the image of the logo
app.get('/logo.jpg', function(req, res){
  res.sendFile(path.join(__dirname + '/public/assets/new.jpg'));
})

//sending the icon for search
app.get('/search.svg', function(req, res){
	res.sendFile(path.join(__dirname + '/public/assets/search.svg'));
})

app.get('/house1vid.mp4', function(req, res){
	res.sendFile(path.join(__dirname + '/public/houses/house1vid.mp4'));
})

app.get('/img1.png', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/featured/img1.png'));
})

app.get('/img2.png', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/featured/img2.png'));
})

app.get('/img3.png', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/featured/img3.png'));
})

app.get('/back_1.jpg', function(req, res){
	res.sendFile(path.join(__dirname + '/public/assets/back_1.jpg'));
})

app.get('/explore.html', function(req, res){
	res.sendFile(path.join(__dirname + '/public/explore.html'));
})

app.get('/index.html', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

//******************** Your code goes here ******************** 

/**********Setting up the functions**************/



app.listen(portNum);
console.log('Running app at localhost: ' + portNum);