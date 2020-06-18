/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-12 15:16:09
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-12 15:23:36
 */ 
var http = require('http');
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/plain'});
  response.end('Hello World\n');
}).listen(8888)
console.log('Server running at http://127.0.0.1:8888/');