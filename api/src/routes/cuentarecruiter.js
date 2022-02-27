const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');


const {Recruiter} = require('../db.js');

router.post('/', async (req, res)=> {
    const {name, lastname, email, organization, password, image, location, description} = req.body;
    const passwords = await bcryptjs.hash(password, 10);
    try {
        const candidate = await Recruiter.create({
            name,
            lastname,
            email,
            organization,
            password: passwords,
            image,
            location,
            description
            })
        res.json(candidate)    
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;




