/**
 * 主路由
 */
const user = require('./user')
const headers = require('./headers')


module.exports = app => {
    // app.use(headers.apptype)//所有的数据请求都需要验证
    // app.use(headers.token)//所有的数据请求都需要验证token
    app.use('/api/user', user)//功能模块子路由
    // app.use('/order',order)
    // app.use('/address',address)
}

