/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-16 10:11:14
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-16 10:22:31
 */ 
var fs = require('fs');
// var data = '';
// //读取
// var readerStream = fs.createReadStream('../files/input.txt');

// readerStream.setEncoding('UTF8');

// readerStream.on('data',function(chunk){
//   data+=chunk;
// })

// readerStream.on('end',function(){
//   console.log(data)
// })

// readerStream.on('error',function(err){
//   console.log(err)
// })
// // 写入
// var dataWriter = '我是写入的啊';
// var writerStream = fs.createWriteStream('../files/input.txt');
// writerStream.write(dataWriter,'UTF8');
// // 标记文件末尾
// writerStream.end();

// writerStream.on('finish',function(){
//   console.log('写入完成')
// })

// writerStream.on('error',function(err){
//   console.log(err)
// })

var readerStream = fs.createReadStream('../files/input.txt');
var writerStream = fs.createWriteStream('../files/output.txt');

readerStream.pipe(writerStream)