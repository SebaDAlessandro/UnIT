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

    

router.post('/', async (req, res, next) => {
    const { location } = req.body;
    try{

        const [encontrado, creado] = await Location.findOrCreate({
            where:{location: location}})
        if(creado === true){
            res.send(`La locacion ${location} fue creado correctamente`);
        }else{
            res.send(`La locacion ${location} ya existe`)
        }

    }catch(error){
        next(error)
    }
})


router.post('/:candidate', async (req, res, next) => {
    const { candidate } = req.params;
    const { location } = req.body;

    try{
        const encontradoE = await Candidate.findByPk(candidate);
        const encontradoL = await Location.findOne({
            where:{
                location: location
            }
        });
        if(encontradoE && encontradoL){
            await encontradoE.addLocation(encontradoL)
            res.send(`La locacion ${location} fue agregado correctamente a el usuario ${encontradoE.name}`)
        }else {
            res.send(`Algo salio mal`)
        }
    }catch(error){
        next(error)
    }

})




router.delete('/:id', async (req, res, next) => {

    const {id} = req.params;

    
    try{
        const lg = await Location.findByPk(id);

        
        if(lg){
            await lg.destroy();
            res.json({msg: "la locacion se elimino correctamente"})
        }else{
                res.json({msg: "la locacion no existe"})

            }
        } catch(error){
            next(error)
       
    }
})



module.exports = router;