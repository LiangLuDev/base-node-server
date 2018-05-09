/**
 * 主路由
 */
const user = require('./user')
// const order = require('./order')
// const address = require('./address')
const headers = require('./headers')

module.exports = app => {
    //所有的数据请求都需要验证
    // app.use(headers.apptype)
    //所有的数据请求都需要验证token
    // app.use(headers.token)
    //功能模块子路由
    app.use('/api/user', user)
    // app.use('/api/order',order)
    // app.use('/api/address',address)
}
