const seedBrew = require('./brew-seeds');
const seedUser = require('./user-seeds');
const seedReview = require('./review-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBrew();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedReview();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- TAGS SEEDED -----\n');

  

  process.exit(0);
};

seedAll();