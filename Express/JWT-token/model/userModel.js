const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{type:String, unique:true},
    password:String,
    isAdmin:{type:Boolean, default:false},
});

userSchema.virtual("id").get(function (){
    return this._id.toHexString();
});

userSchema.set("toJSON",{
    virtual:true
})

module.exports = mongoose.model('User',userSchema);