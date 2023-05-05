// module.exports = {
//     async afterCreate(event) {
//       const { result } = event;
//       try {
//      console.log("kjkjajkbfjbkf")
//         await strapi.plugins['email'].services.email.send({
//           to: 'ram.gk@metapercept.com',
//           from: "ram.gk@metapercept.com",
//           subject: `This is a test mail`,
//           html: `Hello world ${result.name}`  //<- (you'll need a name field in strapi collection type to display this data)
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   };
