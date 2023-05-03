const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

module.exports = {
  sendEmail: async ({ to, subject, text },callback) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = to.map((email) => ({ email }));
    sendSmtpEmail.sender = { email: 'ram.gkp6@gmail.com', name: 'ram'  };
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.textContent = text;

    try {
      await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log(`Email sent to ${to.length} recipients`);
      callback(null, { message: 'Email sent!' });
  
  
    } catch (error) {
      console.error(error);
    }
  },
};
