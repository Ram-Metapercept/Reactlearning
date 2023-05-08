module.exports = ({ env }) => ({
    email: {
      provider: 'sendinblue',
      providerOptions: {
        apiKey: env('SENDINBLUE_API_KEY'),
      },
      settings: {
        defaultFrom: 'ramgkp6@gmail.com',
        defaultReplyTo: 'ramgkp6@gmail.com',
      },
    },
  });
  