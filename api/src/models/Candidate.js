const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('candidate', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    linkedin: {
      type: DataTypes.STRING,
    },
    github: {
      type: DataTypes.STRING,
    },
    portfolio: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM('Trabajando', 'Busqueda Activa', 'Estudiando'),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cv: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};