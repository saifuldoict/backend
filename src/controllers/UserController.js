const { UserOTPService } = require("../services/UserServices")

exports.UserOTP= async (req, res)=>{
let result = await UserOTPService(req)
return res.status(200).json(result)
}

exports.VerifyLogin= async (req, res)=>{
    
}

exports.UserLogout= async (req, res)=>{
    
}

exports.CreateProfile= async (req, res)=>{
    
}

exports.UpdateProfile= async (req, res)=>{
    
}

exports.ReadProfile= async (req, res)=>{
    
}