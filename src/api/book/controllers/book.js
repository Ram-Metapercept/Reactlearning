'use strict';

/**
 * book controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
// const { sendEmail } = require('../../services/email/sendinblue');

const { sendEmail } = require('../../../services/email/sendinblue');

// Use the sendEmail function to send an email
// const sendEmail = require('./sendEmail');

const recipients = ['ramgkp6@gmail.com', 'ram.gk@metapercept.com', 'kashyapatcae@gmail.com'];
const subject = 'Test Subject';
const text = 'this is testing email from Ram Gopal using sendingblue';

sendEmail({ to: recipients, subject, text });


module.exports = createCoreController('api::book.book');
