
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Set API key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

// Create a new email message
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

// Set the email message details
sendSmtpEmail.subject = 'New Article Posted';
sendSmtpEmail.htmlContent = '<p>A new article has been posted on your website!</p>';
sendSmtpEmail.sender = {'email': 'ramgkp6@gmail.com', 'name': 'Sender Name'};
sendSmtpEmail.to = [{'email': 'ram.gk@metapercept.com', 'name': 'Recipient Name'}];
console.log("akdkdkl")
// Send the email using the Sendinblue API
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.sendTransacEmail(sendSmtpEmail)
  .then(function(data) {
    console.log('Email sent successfully!');
  })
  .catch(function(error) {
    console.error(error);
  });

