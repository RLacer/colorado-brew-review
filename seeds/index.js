const sequelize = require('../config/connection');
const { User, Brew, Review } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./review-seeds.json');

const brewData = require('./brew-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const review of reviewData) {
    await Review.create({
      ...review,
   
    });
  };

  for (const brew of brewData) {
    await Brew.create({
      ...brew,
   
    });
  }

  process.exit(0);
};

seedDatabase();