const sequelize = require('../config/connection');
const { User, Posts, Comment} = require('../models');

const userData = require('./userData.json');
const postsData = require('./postsData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Posts.bulkCreate(postsData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
