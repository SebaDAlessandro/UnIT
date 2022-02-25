const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('technicalskills', {
    technicalskills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
})
}