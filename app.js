const express=require('express');
const router=require('./route');
const bodyParser=require('body-parser');
const app=express();
app.listen(8848, () => {
  console.log('http://127.0.0.1:8848');
});
//处理静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads', express.static('uploads'))

//设置模板引擎
app.set('view engine','ejs');
//默认目录配置
app.set('views',__dirname+"/views");
app.use(router);