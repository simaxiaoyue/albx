// 这个控制器完成所有与用户相关的增删改查
const mysql = require('mysql');
let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu'
})


exports.login = (email, callback) => {
  // email在数据表中是唯一键
  let sql = `SELECT * from users where email = '${email}'`
  conn.query(sql, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result[0])
    }
  })
}