const router = require('express').Router();
const {Access_Token} = process.env;

// Me traigo los medelos de las Base de Datos.
const {Order, Product, Recruiter} = require('../db.js')

// Me traigo el SDK de Mercado Pago.
const mercadopago = require('mercadopago');

// configuracion de mercado pago y se agrega el access_token.
// Esto es para que cuando se haga una peticion a mercado pago se le pase el access_token y MP sabe a que usuario pertenece, en este caso es solo usuario de prueba.
mercadopago.configure({
    access_token: Access_Token
});


//! RUTA

router.get('/', async (req, res, next) => {
    // recibo el id de la orden
    const {id_order} = req.body

    try {
        // busco la orden en la base de datos
    const order = await Order.findOne({where: {orderId: id_order}})

    //? console.log('orden desde la ruta de Mercado Pago', order)

    // busco los productos de la orden 
    const products = await Product.findAll({where: {orderId: id_order}})
    //? console.log('productos de la orden desde la ruta de Mercado Pago', products)
    
    // mapeo los datos de products para tomar solo que a MP le interesa para poder porcesar el pago
    const itemsProduct = products?.map(i => ({
        title: i.name,
        unit_price: i.price,
        quantity: i.quantity,
    }))

    // Objeto de preferencia
    let preference = {
        items: itemsProduct,
        external_reference: `${order.id}`,
        payment_methods: {
            excluded_payment_types: [
                {
                    id: 'atm', 
                }
            ],
        },
        back_urls: {
            success: `http://localhost:3001/mercadopago/pagos`,
            pending: `http://localhost:3001/mercadopago/pagos`,
            failure: `http://localhost:3001/mercadopago/pagos`,
        },
    }

    //Una ves creada la referencia se llama al metodo create de Mercado Pago y  se le pasa el obj de la preferencias.
    const resMercadoPago = await mercadopago.preferences.create(preference)
    res.json({id: resMercadoPago.body.id})
        
    } catch (error) {
        console.log(error.message)
    }
})






module.exports = router;