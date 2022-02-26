const express = require('express');
const router = express.Router();

const {Language } = require('../db.js');


router.post('/', async(req, res) =>{
    const {language, native, level, id_candidate} = req.body;

    try{
       const dato = await Language.create({language, native, level})
       const prueba = await dato.addCountry(id_candidate)
       console.log(prueba)
       res.json(prueba)
    }catch(error){
        console.log(error)
    }
})