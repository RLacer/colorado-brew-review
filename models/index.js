const User = require('./User');
const Brew = require('./Brew');
const Review = require('./Review');

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

 Brew.hasMany(Review, {
 foreignKey: 'brew_id', 
 onDelete: 'CASCADE'
 })

module.exports = { User, Brew, Review};