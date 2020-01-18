const express = require("express")
var React = require('react')
var ReactDOM = require('react-dom');
var bodyParser = require('body-parser')
let  app = express();
app.use(bodyParser.json());
app.use(express.static('src'));
app.listen(3000,  () => console.log("Example app listening on port 3000!"));
app.get('/', (req, res) => res.sendFile(__dirname+"/src/index.html"));
////////////

//internal images only - we will need to develop a way to dynamically put images onto the app (S3 integration with frontend)
app.get('/stanton', function(req,res){
	res.sendFile(__dirname+'/static/img/stanton.jpg')
})
app.get('/dan', function(req,res){
	res.sendFile(__dirname+'/static/img/dan.jpg')
})
app.get('/ricky', function(req,res){
	res.sendFile(__dirname+'/static/img/Ricky.JPG')
})
app.get('/tan',function(req,res){
	res.sendFile(__dirname+'/static/img/Tan.jpg')
})
app.get('/royce',function(req,res){
	res.sendFile(__dirname+"/static/img/background/royce.jpg")
})
app.get('/house', function(req,res){
	res.sendFile(__dirname+'/static/img/houseicon.jpg')
})
app.get('/transparent', function(req, res){
	res.sendFile(__dirname+'/static/img/Transparent.png')
})
app.get('/cityfriends', function(req,res){
	res.sendFile(__dirname+"/static/img/background/cityfriends.jpg")
})
app.get('/collegestudents',function(req,res){
	res.sendFile(__dirname+'/static/img/collegestudents.jpg')
})
app.get('/arrow',function(req,res){
	res.sendFile(__dirname+"/static/img/arrow.jpg")
})
app.get('/sky', function(req, res){
	res.sendFile(__dirname+'/static/img/background/sky.jpg')
})
app.get('/seventyfive', function(req,res){
	res.sendFile(__dirname+'/static/img/background/img-75.jpg')
})
app.get('/video',function(req,res){
	res.sendFile(__dirname+'/static/svg/video-icon.svg')
})