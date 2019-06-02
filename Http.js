let nodemailer = require("nodemailer");

let transport =  nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'Email',
      pass: 'pass'
    }
  })

let mail = {
    from :"Email",
    to: "recepients name",
    subject : "Hello from Sayan Sarkar",
    text : "Hey you!!Have a nice day"
}

transport.sendMail(mail, (err, inf)=>{

    if(err)console.log("Unable to send "+err)
    else{
        console.log("Mail has been sent to the user");
    }

})
