const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'nodejshtml@outlook.com', // Ersetzen Sie dies durch Ihre E-Mail-Adresse
        pass: 'Mikee123' // Ersetzen Sie dies durch Ihr Passwort
    }
});

let mailOptions = {
    from: 'nodejshtml@outlook.com', // Ersetzen Sie dies durch Ihre E-Mail-Adresse
    to: 'jodev51486@mkurg.com',
    subject: 'Unwichtige Email',
    text: 'Nicht beachten'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
