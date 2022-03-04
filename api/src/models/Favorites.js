const { DataTypes } = require('sequelize');

module.exports= (sequelize) =>{
    return sequelize.define('favorite',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {timestamps: false})
}


