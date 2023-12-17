const { default: mongoose, models } = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true,
    },
    certificates:{
        type:Array
    },
    password:{
        type:String,
        required:true
    }
})

export const user = models?.user || mongoose.model('user',userSchema)