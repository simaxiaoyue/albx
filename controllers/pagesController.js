// 这个控制器主要用于返回用户所请求的页面
//前台页面
exports.getIndexPage=(req,res)=>{
res.render('/index');
}

//后台页面
exports.getAdminIndexPage=(req,res)=>{
  res.render('admin/index');
  }
