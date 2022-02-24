const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('softskills', {

    soft_skills: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
  });
};