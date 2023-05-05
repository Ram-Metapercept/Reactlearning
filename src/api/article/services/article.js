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






