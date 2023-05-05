'use strict';

/**
 * article router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::article.article');





const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article');

// module.exports = {
//   routes: [
//     {
//       method: 'POST',
//       path: '/api/article',
//       handler: 'article.create',
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//   ],
// };


