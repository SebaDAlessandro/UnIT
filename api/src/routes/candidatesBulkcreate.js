const express = require('express');
const router = express.Router();

const { Candidate } = require('../db.js');


router.post('/', async( req, res, next) => {
    const {todos} = req.body;
    //todos = [{candidate},{candidate},{candidate},{candidate},...]
    try{

       await Candidate.bulkCreate(todos)
        res.send('Se creo correctamente')

    }catch(error){
        next(error)
    }
})


module.exports = router;