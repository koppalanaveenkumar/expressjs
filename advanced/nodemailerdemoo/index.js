var nodemailer = require('nodemailer');
nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'naveenkumar@gmail.com',
      pass: 'yourpassword'
    }
})
var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
transport.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log("Email sent: " + info.response)
    }
})