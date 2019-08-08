const conn = require('../utils/myconn');

exports.getAllPost = (obj, callback) => {
  let sql = `select posts.*,users.nickname,categories.name
             from posts 
             join users on posts.user_id = users.id
             join categories on posts.category_id = categories.id
             limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;
  conn.query(sql, (err, result) => {
    if (err) {
      callback(err);
    } else {
      sql = `select count(*) as cnt
      from posts 
      join users on posts.user_id = users.id
      join categories on posts.category_id = categories.id`;
      conn.query(sql, (err2, result2) => {
        if (err2) {
          callback(err2);
        } else {
          //不仅仅要返回之前的查询数据，而且还要返回当前查询的总记录数🆓
          callback(null, { data: result, total: result2[0].cnt })
        }
      })
    }
  })
  }