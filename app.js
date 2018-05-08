const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const indexRouter = require('./routes/web/index');
const apiRouter = require('./routes/api/api')
const errorRouter = require('./routes/web/error')
const config = require('./config/config')

const app = express();

//数据库连接
app.use(session({
    store: new MongoStore({url: config.dbUrl})
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//主页
app.use('/', indexRouter);
//api路由
apiRouter(app)
//错误页面
errorRouter(app)

app.listen('3390')
console.log('服务已开启...');