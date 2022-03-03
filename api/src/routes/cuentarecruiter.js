const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');


const {Recruiter, Contacted, Candidate} = require('../db.js');

router.get('/', async (req, res, next) => {
    try{
        const recruiter = await Recruiter.findAll({
            include: [{model: Contacted},{model: Candidate}]
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

router.post("/loginrecruiter", async (req, res) => {
    // TODO: >> http://localhost:3001/cuentarecruiter/loginrecruiter <<
     
    const { email, password } = req.body
  
    try {
            const recruiter = await Recruiter.findOne({ where: { email: email }, })
            const candidate = await Candidate.findOne({ where: { email: email }, })
            if (recruiter !=0 ) {
                const passwords = await bcryptjs.compare(password, recruiter.password)
                if (passwords) {
                    res.send(recruiter)
                } else {
                    res.send("Contraseña incorrecta")
                }
            } else if (candidate !=0) {
                const passwordValidated = await bcryptjs.compare(password, Candidate.password)
                if (passwordValidated) {
                    res.send(Candidate)
                } else {
                    res.send("Contraseña incorrecta")
                }
            }      
    }
    catch (error) {

        res.json({msg: "Ups...!!!existe un error"})

    }
  })

module.exports = router;




