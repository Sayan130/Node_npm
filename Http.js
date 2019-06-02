let nodemailer = require("nodemailer");

let transport =  nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'rick.alipurduar@gmail.com',
      pass: 'Sayan@1406130'
    }
  })

let mail = {
    from :"rick.alipurduar@gmail.com",
    to: "rick.alipurduar@gmail.com, siddharthdutta55@gmail.com",
    subject : "Hello from Sayan Sarkar",
    text : "Hey you!!Have a nice day"
}

transport.sendMail(mail, (err, inf)=>{

    if(err)console.log("Unable to send "+err)
    else{
        console.log("Mail has been sent to the user");
    }

})