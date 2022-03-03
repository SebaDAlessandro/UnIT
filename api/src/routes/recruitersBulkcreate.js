const express = require('express');
const router = express.Router();

const { Recruiter } = require('../db.js');


router.post('/', async( req, res, next) => {
    const {todos2} = req.body;
    //todos = [{recruiter},{recruiter},{recruiter},{recruiter},...]
    try{

       await Recruiter.bulkCreate(todos2)
        res.send('Se creo correctamente')

    }catch(error){
        next(error)
    }
})


module.exports = router;