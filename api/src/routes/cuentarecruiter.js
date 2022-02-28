const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');


const {Recruiter, Contacted, Candidate} = require('../db.js');

router.get('/', async (req, res) => {
    try{
        const recruiter = await Recruiter.findAll({
            include: [{model: Contacted},{model: Candidate}]
        })
        res.json(recruiter)
    }catch(error){
        res.send(error)
    }
})


router.post('/', async (req, res)=> {
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
        res.send(recruiter)    
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;




