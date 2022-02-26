const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('formation',{
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        institution:{
            type: DataTypes.STRING,
        },
        ubication:{
            type: DataTypes.STRING
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        starting_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ending_date: {
            type: DataTypes.DATE,
        },
        description:{
            type: DataTypes.TEXT
        }
    })
}