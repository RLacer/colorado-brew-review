const seedBrew = require('./brew-seeds');

const seedReview = require('./review-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBrew();
  console.log('\n----- Brew SEEDED -----\n');

  await seedReview();
  console.log('\n----- review SEEDED -----\n');

 
  

  process.exit(0);
};

seedAll();