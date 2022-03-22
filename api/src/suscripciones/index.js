const express = require('express');
const cors = require('cors');
const request = require('request');


const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors())



const CLIENT = 'AeWggkTPqbYBb6sI0JW7djQtn5ztVD2c5FjT0o5F8OyWDXT7M0W4JUPAYKpUh_gAs7v_Caegeg4g6D5s';
const SECRET = 'EFqX_A-gPBsMHzygOBNz82nhPmYVtf8TgslhZLqm0O-dpRvTf1yBqDMqNcs9ig_VTXsDScrxa_iTSE3O';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com;


const auth = { user: CLIENT, pass: SECRET }


const createProduct = (req, res) => {
    const product = {
        name: 'Premium',
        description: "Subscripcion a Unit mensual",
        type: 'SERVICE',
        category: 'SOFTWARE',
        image_url: 'https://avatars.githubusercontent.com/u/15802366?s=460&u=ac6cc646599f2ed6c4699a74b15192a29177f85a&v=4'
    
    }

    //https://developer.paypal.com/docs/api/catalog-products/v1/#products_create
    request.post(`${PAYPAL_API}/v1/catalogs/products`, {
        auth,
        body: product,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}

const createPlan = (req, res) => {
    const { body } = req
    //product_id

    const plan = {
        // product_id:,
        name: 'PLAN mensual',
        product_id: body.product_id,
        status: "ACTIVE",
        billing_cycles: [
            {
                frequency: {
                    interval_unit: "MONTH",
                    interval_count: 1
                },
                tenure_type: "REGULAR",
                sequence: 1,
                total_cycles: 12,
                pricing_scheme: {
                    fixed_price: {
                        value: "3", // PRECIO MENSUAL QUE COBRAS 3.30USD
                        currency_code: "USD"
                    }
                }
            }],
        payment_preferences: {
            auto_bill_outstanding: true,
            setup_fee: {
                value: "0",
                currency_code: "USD"
            },
            setup_fee_failure_action: "CONTINUE",
            payment_failure_threshold: 3
        },
        taxes: {
            percentage: "10", // 10USD + 10% = 11 USD
            inclusive: false
        }
    }

    request.post(`${PAYPAL_API}/v1/billing/plans`, {
        auth,
        body: plan,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}


const generateSubscription = (req, res) => {
    const { body } = req

    const subscription = {
        plan_id: body.plan_id, //P-3HK92642FR4448515MBQHCYQ
        start_time: "2022-03-17T20:54:05Z",
        quantity: 1,
        subscriber: {
            name: {
                given_name: body.name,
                surname: body.surname
            },
            email_address: body.mail,
        },
        return_url: 'http://localhost/gracias',
        cancel_url: 'http://localhost/fallo'

    }
    request.post(`${PAYPAL_API}/v1/billing/subscriptions`, {
        auth,
        body: subscription,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}


app.post(`/create-product`, createProduct)

app.post(`/create-plan`, createPlan)

app.post(`/generate-subscription`, generateSubscription)

app.listen(4000, () => {
    console.log(`Comenzemos a generar dinero --> http://localhost:4000`);
})