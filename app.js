const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

const indexRouter = require('./routes/web/index');
const apiRouter = require('./routes/api/api')
const errorRouter = require('./routes/web/error')
const db = require('./config/db')
const constant = require('./utils/constant')

const app = express();

//数据库连接
db.connect()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//请求日志打印到控制台
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 设置superSecret 全局参数
app.set('superSecret', constant.jwtsecret);

//主页
app.use('/', indexRouter);
//api路由
apiRouter(app)
//错误页面
errorRouter(app)

app.listen('3390')
console.log('服务已开启...');