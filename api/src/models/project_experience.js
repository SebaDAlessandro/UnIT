const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('project_experience', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre_empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_finalizacion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
  });
};