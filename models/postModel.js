const conn = require('../utils/myconn');

exports.getAllPost = (obj,callback) => {
  let sql = `select posts.*,users.nickname,categories.name
             from posts 
             join users on posts.user_id = users.id
             join categories on posts.category_id = categories.id
             limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`;
  conn.query(sql, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result)
    }
  })
}