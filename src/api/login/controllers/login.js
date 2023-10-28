module.exports = {
    async login(ctx) {
      const { username, password } = ctx.request.body;
  
      // Check if user exists
      const user = await strapi.query('user', 'users-permissions').findOne({ username });
  
      if (user && user.password === password) {
        ctx.send({ success: true });
      } else {
        ctx.send({ success: false });
      }
    },
  };
  