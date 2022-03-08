const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('nivel', {
      level: {
          type: DataTypes.ENUM('A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Native'),
          allowNull: false
      } 
    }, {timestamps: false})
}