const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('contactado', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCadidate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status_contacto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    puesto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};