const email = require(__dirname + '/responsive-email.js');

const nodemailer = require('nodemailer');

// === ACCOUNT SETTINGS ===

const transporter = nodemailer.createTransport({
    service: 'gmail'
});

// === GET DATA FROM FIREBASE ===

module.exports.sendEmailNodemail = (id, cb) => {

    console.log('EMAIL SENDER ACTIVATED!');

    const database = require(__dirname + '/../data/firebase.js').getData();
    const user = database.ref(`user_${id}`);

    // = email sending options =
    const generateOptions = (from, to, subject, text, html) => {
        return {
            from,
            to,
            subject,
            text,
            html
        };
    };

    const sendMail = (mailOptions) => {
        transporter.sendMail(mailOptions, cb);
    };

    // = get data from database =
    return user.once("value",
        (snapshot) => {
            const data = snapshot.val();
            
            // = generate html template =

            const html = email.getEmail()(data);

            // = save email as html file for debugging =
            const fs = require("fs");
            fs.writeFileSync("letter.html", html);

            let mailOptions = generateOptions(
                'Guardian Bikes',
                data.user.email,
                'Your RideSizer Growth Report For Guardian Bikes!',
                '',
                html
            );

            // = email sending service =

            sendMail(mailOptions);

        },
        (errorObject) => console.log("The read failed: " + errorObject.code)
    );
};