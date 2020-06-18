/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-12 15:22:58
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-12 15:25:58
 */ 
var fs = require('fs');
var data = fs.readFileSync('../files/input.txt');
console.log(data.toString());
console.log('结束')