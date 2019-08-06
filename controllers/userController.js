// 这个控制器主要处理用户有关的业务逻辑
const userModel = require('../models/userModel.js');
exports.login = (req, res) => {
    // 接收参数
    let obj = req.body;
    console.log(obj);

    // 业务处理--调用数据模块
    userModel.login(obj.email, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: '服务器异常'
            })
        } else {
            if (data) { // 有没有能够查询到结果
                if (data.password == obj.password) {
                    // //使用cookies写入登陆状态
                    // res.writeHead(200,{
                    //     'Set-Cookie':'isLogin=true'
                    // })
                    //使用session写入登陆状态
                    req.session.isLogin = 'true';
                    // 将当前用户对象存储到Session
                    req.session.currentUser = data
                    res.end(JSON.stringify({ code: 200, msg: '登陆成功' }))

                } else {
                    res.json({
                        code: 400,
                        msg: '密码输入错误'
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '邮箱输入错误'
                })
            }
        }
    })
}