/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-16 16:58:34
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-17 16:37:33
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.5.11',
  user: 'root',
  password: 'wqq123456',
  database: 'blog'
});

connection.connect();
// 查询
// var sql = 'SELECT * FROM websites';
// connection.query(sql,function(err,result){
//   if(err){
//     console.log('[select error]-',err.message);
//     return;
//   }
//   console.log('-------------select------------');
//   console.log(result);
// })
// 插入
// 增加的内容可以直接在VALUES中 也可以在 第二个参数中
// var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,2,3,4,5)';
// var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
// connection.query(addSql, function (err, result) {
//   if (err) {
//     console.log('[select error]-', err.message);
//     return;
//   }
//   console.log('--------------------------INSERT----------------------------');
//   //console.log('INSERT ID:',result.insertId);        
//   console.log('INSERT ID:', result);
//   console.log('-----------------------------------------------------------------\n\n');
// })
// 更新
// var modSql = 'UPDATE websites SET name=?,url=? WHERE id = ?';
// var modParams = ['来邦科技', 'www.bdai.com', 6];
// connection.query(modSql, modParams, function (err, result) {
//   if (err) {
//     console.log('[UPDATE ERROR] - ', err.message);
//     return;
//   }
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows', result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// })
// 删除
// var delSql = 'DELETE FROM websites where id = 7';
// connection.query(delSql, function (err, result) {
//   if (err) {
//     console.log('[DELETE ERROR] - ', err.message);
//     return;
//   }

//   console.log('--------------------------DELETE----------------------------');
//   console.log('DELETE affectedRows', result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// })

// 创建数据表
// var createSql = 'CREATE TABLE runoob_tbl('+
// 'runoob_id INT NOT NULL AUTO_INCREMENT,'+
// 'runoob_title VARCHAR(100) NOT NULL,'+
// 'runoob_author VARCHAR(40) NOT NUll,'+
// 'submission_date DATE,'+
// 'PRIMARY KEY(runoob_id)) ENGINE= InnoDB DEFAULT CHARSET=utf8;';

// connection.query(createSql,function(err,result){
//   if(err){
//     console.log('Error:'+err.message);
//     return;
//   }
// })
// 删除数据表
var deleteSql = 'DROP TABLE runoob_tbl';
connection.query(deleteSql,function(err,result){
  if(err){
    console.log('Error:'+err.message);
    return;
  }
});