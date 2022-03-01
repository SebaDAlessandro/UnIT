const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');


const {Recruiter, Contacted, Candidate} = require('../db.js');

router.get('/', async (req, res, next) => {
    try{
        const recruiter = await Recruiter.findAll({
            include: [{model: Contacted}]
        })
        res.json(recruiter)
    }catch(error){
        next(error)
    }
})


router.post('/', async (req, res, next)=> {
    const {name, lastname, email, organization, password, image, location, description} = req.body;
    const passwords = await bcryptjs.hash(password, 10);
    try {
        const recruiter = await Recruiter.create({
            name,
            lastname,
            email,
            organization,
            password: passwords,
            image,
            location,
            description
            })
        res.send(`El recruiter ${name} fue creado correctamente`)    
    } catch (error) {
        next(error)
    }
})

module.exports = router;




