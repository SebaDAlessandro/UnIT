const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type:{
        type: DataTypes.ENUM('platillas','portfolio','subscription'), // los que se me ocurren
    },
    name: { // nombre del producto subcription 1, 2, 3, o subscription basic, medium, preminun o subscription premium plata, cobre, oro.  
        type: DataTypes.STRING(), // o ENUM si se define los tipos de productos.
        allowNull: false
    },
    price: { // precio del producto. Necesario???
        type: DataTypes.FLOAT,
    }
    
  },{timestamps: false});
};