


/**
 * 数据返回code msg
 */
const RESULT = {
    SUCCESS: {code: 10000, msg: '请求成功'},
    CREATE_SUCCESS: {code: 10001, msg: '创建成功'},
    UPDATE_SUCCESS: {code: 10002, msg: '修改成功'},
    DELETE_SUCCESS: {code: 10003, msg: '删除成功'},
    NO_DATA: {code: 10004, msg: '查询不到数据'},
    ARG_ERROR: {code: 40000, msg: '参数错误'},
    NO_LOGIN: {code: 40001, msg: '未登录'},
    FORBIDDEN: {code: 40003, msg: '禁止访问'},
    NOT_FOUND: {code: 40004, msg: '未找到'},
    UPLOAD_ERR: {code: 40005, msg: '上传失败'},
    INTERNAL_ERROR: {code: 50000, msg: '服务器内部错误'},
    FAILD: {code: 50003, msg: '请求失败'},
    TOKEN_NO_FIND: {code: 60001, msg: 'token找不到,请重新登录'},
    TOKEN_ERR: {code: 60002, msg: 'token无效,请重新登录'},
}

exports.RESULT = RESULT
exports.jwtsecret='dev-secret'