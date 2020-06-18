/*
 * @Descripttion: 
 * @version: 
 * @Author: wqq
 * @Date: 2020-06-17 16:45:27
 * @LastEditors: wqq
 * @LastEditTime: 2020-06-17 17:09:42
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '192.168.5.11',
  user: 'root',
  password: 'wqq123456',
  database: 'blog'
});

connection.connect();
//插入数据
// var insertValues = [
//   ['1', '小明', '2016-04-22 15:25:33', '1'],
//   ['2', '小王', '2016-04-20 15:25:47', '3'],
//   ['3', '小丽', '2016-04-19 15:26:02', '2'],
//   ['4', '小王', '2016-04-07 15:26:14', '4'],
//   ['5', '小明', '2016-04-11 15:26:40', '4'],
//   ['6', '小明', '2016-04-04 15:26:54', '2']
// ]
// var addSql = "INSERT INTO employee_tbl VALUES ?";
// connection.query(addSql, [insertValues], function (err, result) {
//   if(err){
//     console.log(err.message);
//     return;
//   }
// })

// 分组查询
var sql = 'SELECT name,COUNT(*) FROM employee_tbl GROUP BY name';
connection.query(sql,function(err,result){
  if(err){
    console.log(err.message);
    return;
  }
  console.log(result)
})