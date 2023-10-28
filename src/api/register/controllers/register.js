module.exports = {
    async register(ctx) {
      const { username, password } = ctx.request.body;
  
      // Check if user already exists
      const existingUser = await strapi.query('user', 'users-permissions').findOne({ username });
  
      if (existingUser) {
        ctx.send({ success: false, message: 'Username already exists' });
      } else {
        // Create a new user
        const newUser = await strapi.query('user', 'users-permissions').create({ username, password });
        ctx.send({ success: true, user: newUser });
      }
    },
  };
  