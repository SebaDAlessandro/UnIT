const { DataTypes } = require('sequelize');

module.exports= (sequelize) =>{
    return sequelize.define('prod_recruiter',{
    }, {timestamps: false})
}


