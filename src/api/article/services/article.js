'use strict';

/**
 * article service
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::article.article');

// const toEmail = process.env.TOEMAIL;
// const welcome = process.env.WELCOME;
// module.exports = {
//   async create(data) {
//     const response = await strapi.entityService.create("api::article.article", {
//       data,
//     });
//     strapi
//       .service("api::comment.sendmail")
//       .send(
//         welcome,
//         toEmail,
//         "Welcome",
//         `A product has been created ${entity.name}`
//       );
//     return response;
//   },
// };



const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article');

// const toEmail = process.env.TOEMAIL;
// const welcome = process.env.WELCOME;

// module.exports = {
//   async create(data) {
    
//     const response = await strapi.entityService.create("api::article.article", {
//       data,
//     });
//     strapi
//       .service("api::comment.sendmail")
//       .send(
//         welcome,
//         toEmail,
//         "Welcome",
//         `A product has been created: ${data.title}`
//       );
//     return response;
//   },
// };






















// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::article.article');

// const sendmail = async (recipientEmail, subject, message) => {
//   await strapi.plugins.email.services.email.send({
//     to: recipientEmail,
//     subject,
//     text: message,
//   });
// };

// module.exports = {
//   async create(data) {
//     const entity = await strapi.services['api::article.article'].create(data);

//     try {
//       await sendmail('recipient_email@example.com', 'New content added', 'New content has been added to the collection');
//     } catch (err) {
//       console.error(err);
//     }

//     return entity;
//   },
// };
