const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    email:{required:true,type:String},
    password:{required:true,type:String},
})

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}