# Nodejs Mongodb Express后台mvc架构基础（入门学习）
### 前言
---

> 本文档针对于像我一样的初学者，自己写了个简单的基础demo学习。原来我是一名本分老实的Android Developer，被朋友带入放荡不羁的Node坑，一入坑再也爬不上来。入门简单强烈推荐会js的朋友入坑（我一个做Android的都入坑，所以，别慌），之前为自己的开源App写的一个小后台（写法极其low，虽然现在也不怎么样），现在稍有改进，以后会继续用简洁优美的写法优化。（以上都是我瞎扯的）

### **项目介绍**
> 项目使用Express框架和Mongodb数据库
### **项目使用**
#### 1.clone项目
> git clone https://github.com/LiangLuDev/base-node-server
#### 2.依赖模块安装
> npm install
#### 3.mongodb数据库安装，启动
> 安装启动这类教程网上很多，自行查阅
#### 4.启动
> npm start
#### 5.测试
> locahost:3390  访问成功就完毕了。
### **项目详解**
##### 1. 项目入口
**app.js**
- express组件初始化
- 数据库连接
- 注册路由
- node服务启动
 ##### 2. 数据库配置连接
 数据库操作（连接、增删改查等）使用mongoose模块，mongoose很好用，我这边只展示最基本的连接操作
```
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/base-node-server'

exports.connect = () => {
    mongoose.connect(dbUrl, (err) => {
        if(err){
            console.log('数据库连接失败');
        }else{
            console.log('数据库连接成功');
        }
    })
}
```
mongoose功能远远不止这些，
详细请查看相关api， 中文版貌似机器翻译，不怎么完善，酌情使用，尽量阅读官方api。
- [mongoose api英文版（官方）](http://mongoosejs.com/docs/guide.html)
- [mongoose api中文版（非官方）](https://mongoosedoc.top/docs/index.html)
- [mongoose api中文版（非官方）](https://github.com/dreamFlyingCat/mongoose-API)
 ##### 3. api主路由
 api主路由,所有的api数据功能相关在此汇聚，作为主路由会分发到各个功能模块路由
```
/**
 * 主路由
 */
const user = require('./user')
const order = require('./order')
const address = require('./address')
const headers = require('./headers')

module.exports = app => {
    //所有的数据请求都需要验证
    app.use(headers.apptype)
    //所有的数据请求都需要验证token
    app.use(headers.token)
    //功能模块子路由
    app.use('/api/user', user)
    app.use('/api/order',order)
    app.use('/api/address',address)
}
```
 ##### 4. 子路由
功能子路由，例如:登录、注册操作在此声明汇聚
```
/**
 * 用户子路由
 */
const express = require('express');
const User = require('../../controller/user/user');
const router = express.Router();

router.post('/register',User.register)
router.post('/login',User.login)

module.exports = router
```
 ##### 5. controller逻辑数据处理
 逻辑处理、数据库操作都在此处理。   例：用户注册完毕存入数据库，返回前台注册成功等操作
```
//注册用户
    async register(req, res, next) {
        let username = req.body.username;
        let userpassword = req.body.userpassword;
        try {
            const userinfo = {
                user_name: username,
                user_password: userpassword,
                create_time: dtime().format('YYYY-MM-DD HH:mm')
            }
            await UserModel.create(userinfo)
            res.json({
                code: Constant.RESULT.SUCCESS.code,
                msg: Constant.RESULT.SUCCESS.msg,
                data: '注册成功',
            })
        } catch (err) {
            res.json({
                code: Constant.RESULT.FAILD.code,
                msg: Constant.RESULT.FAILD.msg,
                data: '注册失败',
            })
        }
    }
```

 ##### 6. 数据model
 这里就是mongoose的强大之处，使用mongoose绑定mondel，然后mondel就可以直接对数据库增删改查，数据库字段、索引等等在此声明。
```
/**
 * @type 数据库model
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: Number,
    user_name: String,
    user_password: String,
    user_age: String,
    user_level: String,
    create_time:String
})

//建立索引  提高查询效率
userSchema.index({user_id: 1})

const userinfo = mongoose.model('userinfo', userSchema);

module.exports = userinfo

```
### **意见反馈**
如果遇到问题或者好的建议，请反馈到：issue、927195249@qq.com 或者LiangLuDev@gmail.com

如果觉得对你有用的话，赞一下吧!


