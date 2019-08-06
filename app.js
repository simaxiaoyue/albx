const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
app.listen(8080, () => {
  console.log('http://127.0.0.1:8080');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
//处理静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'))

//设置模板引擎
app.set('view engine', 'ejs');
//默认目录配置
app.set('views', __dirname + "/views");

// 在express中使用session中间件,因为默认情况下，express并不会开启sesison的使用
app.use(session(
  {
    // 加盐
    secret: 'my_albx_35',
    resave: false,
    saveUninitialiazed: false
  }
))
app.use(function (req, res, next) {
    // 三种场合不用登陆
    // 1.登陆页
    // 2.前面三个页面不用登陆
    // 3.有登陆状态
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
        next()
    } else {
        // redirect:实现重定向
       res.redirect('/admin/login')
    } 
})

app.use(router);