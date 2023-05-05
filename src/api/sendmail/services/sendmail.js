const nodemailer = require('nodemailer');
const userEmail = process.env.MYEMAIL
const userPass = process.env.MYPASS
// Create reusable transporter object using SMTP transport.
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: kashyap,
//     pass: userPass,
//   },
// });


// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     requireTLS:true,
//     auth: {
//         user: "kashyapatcae@gmail.com",
//         pass: "sjxsaatxromjmnxg"
//     }
// })
// module.exports = {
//   send: (from, to, subject, text) => {
//     // Setup e-mail data.
//     const options = {
//       from,
//       to,
//       subject,
//       text,
//     };
//     // Return a promise of the function that sends the email.
//     return transporter.sendMail(options);

//   },
// };


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kashyapatcae@gmail.com',
//     pass: 'sjxsaatxromjmnxg',
//   },
// });


// async function sendMail(to, subject, text) {
//     const options = {
//       from: 'your_email@example.com',
//       to: to,
//       subject: subject,
//       text: text,
//     };
  
//     try {
//       await transporter.sendMail(options);
//       console.log(`Email sent to ${to}`);
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   module.exports = {
//     send: sendMail,
//   };
  



// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kashyapatcae@gmail.com',
//     pass: 'sjxsaatxromjmnxg',
//   },
// });
//   console.log("kjhf")
// async function sendMail(from,to, subject, text) {
//   const options = {
//     from: 'kashyapatcae@gmail.com',
//     to: "ramgkp6@gmail.com",
//     subject: "subscribed email",
//     text: "welcome to India",
//   };

//   try {
//     await transporter.sendMail(options);
  
//     console.log(`Email sent to ${to}`);
//   } catch (err) {
//     console.error(err);
//   }
// }

// module.exports = {
//   send: sendMail,
// };


