const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('softskill', {

    soft_skill: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
  },{timestamps: false});
};