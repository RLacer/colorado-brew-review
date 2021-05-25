const User = require('./User');
const Brew = require('./Brew');
const Review = require('./Review');

// User.hasMany(Brew, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });



module.exports = { User, Brew, Review};