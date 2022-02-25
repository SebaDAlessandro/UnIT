const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('language', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
language: {
    type: DataTypes.STRING,
    allowNull: false,
},
native: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
},
level: {
    type: DataTypes.ENUM('A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'),
    allowNull: false,
}
});
};
