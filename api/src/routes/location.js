const express = require('express');
const router = express.Router();
const axios = require('axios');


const {Candidate, Location} = require('../db.js');

//trae todos los paises desde una API y la DB
router.get("/", async (req, res, next) =>{

    const location = await Location.findAll();
    try{
        if(location.length > 0){
            console.log("DB")
            res.json(location)
        } else {
            const desdeApi = await axios.get("https://restcountries.com/v3.1/all")
            const todos = desdeApi.data
            console.log("API")
            const nombres = await todos.map( p => (p.name.common)).sort()
            const nombresF = await nombres.map(p => ({location: p}));
            const fin = await Location.bulkCreate(nombresF)
            res.json(fin)
        }
    } catch (error) {
        next(error)
    }
})

    


router.post("/:idCandidate", async (req, res, next) => {

    const {location} = req.body;
    const {idCandidate} = req.params;
    try {
        
        if(location && idCandidate){
            const locacion = await Location.findOne({where: {location: location}});            
            const candidate = await Candidate.findByPk(idCandidate);
            
            await locacion.addCandidate(candidate);
        }
        res.json({msg: "la locacion se relaciono correctamente"})    
    } catch (error) {
        next(error)
    }
})






module.exports = router;