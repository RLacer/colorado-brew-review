const sequelize = require('../config/connection');
const { User, Brew, Review } = require('../models');

const userData = require('./userData.json');
const review = require('./review-seeds.json');

const brew = require('./brew-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const review of Review) {
    await Review.create({
      ...review,
   
    });
  };

  for (const brew of Brew) {
    await Brew.create({
      ...brew,
   
    });
  }

  process.exit(0);
};

seedDatabase();