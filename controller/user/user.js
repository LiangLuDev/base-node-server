/**
 * 用户controller（例如登录、注册等操作逻辑在此实现）
 */
const UserModel = require('../../models/userinfo')
const Constant = require('../../utils/constant')
//时间格式化模块
const dtime = require('time-formater');

class user {

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

}


module.exports = new user()