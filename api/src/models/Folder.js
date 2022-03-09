const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('folders', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    folderName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    recruiterId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },{timestamps: false});
};
