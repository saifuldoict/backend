const nodemailer = require('nodemailer');

const EmailSend= async(EmailTo, EmailText, EmailSubject)=>{
   let transporter =  nodemailer.createTransport({
    host: "mail.themesoft69.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "mern_ostad@themesoft69.com",
      pass: "h4e24DFTj6v)",
    },
    })

    let mailOptions={
        from: 'Task manager MERN <info@teamrabbil.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    }
    return await transporter.sendMail(mailOptions);
}

module.exports=EmailSend;