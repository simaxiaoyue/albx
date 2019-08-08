const conn = require('../utils/myconn');



exports.getAllCate = (callback) => {
  let sql = `select * from categories `;
  conn.query(sql, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })

}