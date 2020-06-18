/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-17 17:23:49
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-17 17:26:16
 */ 
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.5.11',
  user: 'root',
  password: 'wqq123456',
  database: 'blog'
});

connection.connect();
var sql = 'SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a INNER JOIN tcount_tbl b ON a.runoob_author = b.runoob_author';
connection.query(sql,function(err,result){
  if(err){
    console.log(err.message);
    return;
  }
  console.log(result)
})
