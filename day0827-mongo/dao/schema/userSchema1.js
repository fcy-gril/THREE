// 创建用户集合规则
// const userSchema = new mongoose.schema({
//     name:{
//         type:String,
//         require:true,
//         minlength:2       
//     },
//     password:{
//         type:Number,
//         require:true,
//         minlength:2,
//     },
//     email:String,
//     age:{
//         type:Number,
//         default:10
//     },
//     hobbies:[String]
// })
const {schema} = require('../conn/conn1')
module.exports = new schema({
        username:{
            type:String,
            require:true,
            minlength:2       
            },
        password:{
                type:Number,
                require:true,
                minlength:2,
            },
        email:String,
        age:{
                type:Number,
                default:10
            },
        hobbies:[String]
})
