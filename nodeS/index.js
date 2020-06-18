/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-16 10:39:01
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-16 10:42:59
 */ 
var server = require('./server.js');
var router = require('./router.js');
server.start(router.route);