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
