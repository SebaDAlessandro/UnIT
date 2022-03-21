const {DataTypes} = require('sequelize');
// aca se gurada la info de la ordenes de pago que devueve Mercado Pago. 


module.exports = (sequelize) => {
    sequelize.define('order', { 
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Type:{ // tipo de compra, subcription, compra de algun producto(platillas, porfolio, ect) 
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('pending','approved','in_process','rejected','cancelled'),
            allowNull: false
        },
        description:{ // descripcion de producto que esta adquiriendo.
            type: DataTypes.STRING,
            allowNull: false
        },
        method:{ // metodo de pago que se esta usando.
            type: DataTypes.ENUM("mercado pago","paypal"),
            allowNull: false
        },
        pay_method: { //método de pago: efectivo, crédito, efectivo, tranferencia 
            type: DataTypes.STRING 
        },
        amount:{ // monto de la orden.
            type: DataTypes.FLOAT,
            allowNull: false
        },
        currency:{ // moneda de la orden. Ver Site ID mas abajp. 
            type: DataTypes.STRING ,
            allowNull: false
        },
        payment_id: {  // info Mercado Pago
            type: DataTypes.INTEGER, 
            defaultValue: 0
        },
        payment_status: { // info Mercado Pago
            type: DataTypes.STRING, 
            defaultValue: ""
        }, 
        merchant_order_id: { // info Mercado Pago
            type: DataTypes.BIGINT, 
            defaultValue: 0
        }, 

    }, {timestamps: false})
}

//Site ID.
// MLA: Mercado Libre Argentina
// MLB: Mercado Libre Brasil
// MLM: Mercado Libre México
// MLC: Mercado Libre Chile
// MLU: Mercado Libre Uruguay
// MCO: Mercado Libre Colombia
// MPE: Mercado Libre Perú