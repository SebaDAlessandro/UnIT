const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('contacted', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCandidate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //en proceso, bloqueado, rechazado, contactado, macheado
    status: {
      type: DataTypes.ENUM('En proceso', 'Rechazado', 'Contactado', 'Matched' ), 
      // allowNull: false,
    },
    details: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    status_contact: {
      type: DataTypes.BOOLEAN,
    },
    position: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },{timestamps: false});
};