const jwt= require( 'jsonwebtoken') // 使用jwt签名
const constant =require("../../utils/constant")

//请求数据设备类型
function apptype(req, res, next) {
    let type = req.headers['app-type'];
    if (type) {
        next();
    } else {
        res.json({
            code: constant.RESULT.ARG_ERROR.code,
            msg: 'app-type不能为空',
            // data: {}
        });
    }
}

//token验证
function token(req, res, next) {
    // 取token 数据
    let token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, constant.jwtsecret, (err, decoded) => {
            if (err) {
                res.json({
                    code: constant.RESULT.TOKEN_ERR.code,
                    msg: constant.RESULT.TOKEN_ERR.msg,
                });
            } else {
                req.decoded = decoded;
                next();//继续下一步路由

            }
        })
    } else {
        res.json({
            code: constant.RESULT.TOKEN_NO_FIND.code,
            msg: constant.RESULT.TOKEN_NO_FIND.msg,
        });
    }
}


exports.apptype = apptype;
exports.token = token;