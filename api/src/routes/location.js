const express = require('express');
const router = express.Router();


const {Candidate, Location} = require('../db.js');


router.get("/", async (req, res, next) =>{
    try {
        const location = await Location.findAll();
        res.json(location)
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