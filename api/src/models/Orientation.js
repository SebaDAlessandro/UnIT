const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Orientation', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps: false});
};