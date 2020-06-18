/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-16 14:47:14
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-16 15:12:01
 */ 
const fs = require('fs');
const child_process = require('child_process');


// exec模式
// for(let i=0;i<3; i++){
//   var workProcess = child_process.exec('node support.js ' + i,function(error,stdout,stderr){
//     if(error){
//       console.log(error.stack);
//       console.log(error.code);
//       console.log(error.signal);
//     }
//     console.log('stdout'+stdout)
//     console.log('stderr'+stderr)
//   })
//   workProcess.on('exit',function(code){
//     console.log('子进程已退出，退出码'+code)
//   })
// }
// spawn
// for(let i=0;i<3;i++){
//   var workProcess = child_process.spawn('node',['support.js',i]);
//   workProcess.stdout.on('data',function(data){
//     console.log('stdout:'+data);
//   })
//   workProcess.stderr.on('data',function(dat){
//     console.log('stderr:'+data);
//   })
//   workProcess.on('close',function(code){
//     console.log('子进程已退出，退出码'+code)
//   })
// }

for(let i=0;i<3;i++){
 let workProcess = child_process.fork('support.js',[i]);
 workProcess.on('close',function(code){
  console.log('子进程已退出，退出码'+code)
 }) 
}