const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('recruiter', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};