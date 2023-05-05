'use strict';

/**
 * article controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::article.article');



// module.exports = {
//     async create(ctx) {
//       return await strapi
//         .service("api::article.article")
//         .create(ctx.request.body);
//     },
//   };


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article');

// module.exports = {

//   async create(ctx) {
//     // console.log(ctx.request.body)
//     return await strapi.services["api::article.article"].create(ctx.request.body);
//   }
// };


// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::article.article');

// module.exports = {
//   async create(ctx) {
//     const entity = await strapi.services["api::article.article"].create(ctx.request.body);

//     try {
//         console.log("annkkk")
//       await strapi.services.sendEmail.send('ramgkp6@gmail.com', 'New content added', 'New content has been added to the collection');
//     } catch (err) {
//       console.error(err);
//     }

//     return entity;
//   }
// };
