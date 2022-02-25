const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('project_experience', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },//cargo
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organization_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ending_date: {
      type: DataTypes.DATE,
    },
    // 
    status: {
      type: DataTypes.BOOLEAN,
      default: false,
      allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
  });
};