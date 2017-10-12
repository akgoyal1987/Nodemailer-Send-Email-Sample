var nodemailer = require('nodemailer');
var directTransport = require('nodemailer-direct-transport');
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(directTransport({}));

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
    to: 'ak.goyal1987@gmail.com, libertytrustgroupllc@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    // attachments : [{
    //     filename: 'package.json',
    //     path: 'E:\\Examples\\nodemailer-example\\package.json',
    //     contentType: 'application/json'
    // }],
    html: '<b>Hello world ?</b>' // html body
};

transporter.sendMail({
    from: 'ak.goyal1987@testmail.com',
    to: 'ak.goyal1987@gmail.com, libertytrustgroupllc@gmail.com',
    subject: 'testing email',
    html: `<h1>hi, this is testing email sent without any SMPT server authenticaiton. message is sent by direct transport from server</h1>`
}, function (error, result) {
    if(error){
        console.log(error);
    }else{
        console.log(result);
    }
});

// send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });