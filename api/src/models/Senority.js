const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('senorit', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    senority: {
        type: DataTypes.STRING
    },
    
  },{timestamps: false});
};