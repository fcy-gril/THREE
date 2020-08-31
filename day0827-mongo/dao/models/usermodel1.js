// model是有schema生成的
// const userModel = mongoose.model('user',userSchema,'users')
const { model } = require('../conn/conn1');
const userSchema = require('../schema/userSchema1');
module.exports = model('user',userSchema,'admin')