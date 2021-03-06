const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model { }

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brewery_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },
      user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;
