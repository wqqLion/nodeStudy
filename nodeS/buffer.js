/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-16 09:57:18
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-16 10:04:25
 */ 
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10,1)

let buf = Buffer.alloc(256);
len = buf.write('www.baidu.com');
console.log('写入字节数'+len)

// 读取
console.log(buf.toString('utf8',1,5))