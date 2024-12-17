const EmailSend = require("../utility/EmailHelper")


const UserOTPService = async(req)=>{
    let email= req.params.email
    let code= Math.floor(100000+Math.random()*900000)
    let EmailText = `Your Email verification code is=${code}`
    await EmailSend(email, emai)

}

const VerifyLoginService = async(req)=>{
    
}

const UserLogoutService = async(req)=>{
    
}
const CreateProfileService = async(req)=>{
    
}
const UpdateProfileService = async(req)=>{
    
}
const ReadProfileService = async(req)=>{
    
}

module.exports={
    UserOTPService,
    VerifyLoginService,
    UserLogoutService,
    CreateProfileService,
    UpdateProfileService,
    ReadProfileService
}