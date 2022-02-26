const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');


const {Recruiter} = require('../db.js');

router.post('/', async (req, res)=> {
    const {name, lastname, email, empresa, password} = req.body;
    const passwords = await bcryptjs.hash(password, 10);
    try {
        const candidate = await Recruiter.create({
            name,
            lastname,
            email,
            empresa,
            password: passwords
            
            })
        res.json({msg: "el usuario se creo corerctamente"})    
    } catch (error) {
        console.log(error)
    }
})




