/*
 * @Descripttion: 事件系统
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-12 15:30:11
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-16 09:54:20
 */ 
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connertHandler = function(){
  console.log('链接成功')
  eventEmitter.emit('data_received');
}
eventEmitter.on('connection',connertHandler);

eventEmitter.on('data_received',function(){
  console.log('接收成功')
})

eventEmitter.emit('connection')