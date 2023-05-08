const sendinblue = require('./config/sendinblue');

module.exports = {
  async send_email_on_new_article(ctx) {
    const article = ctx.request.body;

    // Extract the necessary information from the article object
    const { title,content } = article;

    // Set up the email parameters
    const params = {
      to: 'ramgkp6@gmail.com', // Replace with your own email address
      subject: `New article: ${title}`,
      html: `
       
        <p><strong>Content:</strong> ${content}</p>
      `
    };

    try {
        console.log("dhbjbda")
    
      // Use the Sendinblue API to send the email
      const response = await sendinblue.sendEmail(params);
      console.log(`Email sent successfully: ${response}`);
    } catch (error) {
      console.error(`Error sending email: ${error}`);
    }
  }
};
