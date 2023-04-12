const nodemailer = require('nodemailer');
var transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    requireTLS:true,
    auth: {
      user: '/*user email*/',
      pass: "/*user password*/"
  }
});

var mailOptions = {
    from: '/*user email*/',
    to: '/*sender email*/',
    subject: 'How To Send Email With Attachment Using Node.js',
    html: '<h1>Hello, This is websolutionstuff !!</h1><p>This is test mail..!</p>',
    attachments: [
          { 
              filename: 'Nodejs Docs.pdf',
              path:'D:/NodeJs Development/Express/NodeMailer/Nodejs Docs.pdf'
          }
      ]
  };
  
transpoter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  