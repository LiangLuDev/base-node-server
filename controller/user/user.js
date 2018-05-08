const UserModel = require('../../models/userinfo')
const Constant = require('../../utils/constant')
const dtime = require('time-formater');

class user {

    //创建用户
    async createuser(req, res, next) {
        let username = req.query.username;
        let userpassword = req.query.userpassword;
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