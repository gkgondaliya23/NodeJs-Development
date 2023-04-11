const express=require("express")
const jwt=require("jwt-simple")
const tokenObj=require("../Token/token")
const LoginModule=express.Router();

LoginModule.post("/",(req,res)=>{
    const uname=req.body.uname;
    const upwd=req.body.upwd;
    console.log(uname, " - ",upwd)
    if(uname==="admin"&&upwd==="admin123"){
        const token=jwt.encode({uname:uname,upwd:upwd},"skillqode@123")
        tokenObj.token=token;
        console.log(token)
        res.json({msg:"login Success...",token:token})
    }
    else{
        res.json({msg:"login fail"})
    }
})
module.exports=LoginModule; 