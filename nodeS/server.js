/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-16 10:33:13
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-16 10:41:01
 */ 
var http = require('http');
var url = require('url');
function start(route){
  function onRequest(request,response){
    var pathName = url.parse(request.url).pathname;
    console.log('请求'+pathName);
    route(pathName);
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('hello word');
    response.end()  
  }
  http.createServer(onRequest).listen(8888);
  console.log('server is listening in 8888')
}

exports.start = start;
