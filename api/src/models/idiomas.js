const { DataTypes, ENUM } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('language', {
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
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
    type: DataTypes.STRING,
    allowNull: false,
}
});
};
