/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-16 14:20:30
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-16 14:34:28
 */ 
var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send('hello world');
})

app.post('/',function(req,res){
  
})

var server = app.listen(8081,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})