const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('recruiter', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    // nombre de la empresa o freelance desde el front
    organization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      
    },
    description: {
      type: DataTypes.TEXT,
    },
    location:{
      type: DataTypes.STRING,
      
    }
  });
};