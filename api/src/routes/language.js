const express = require('express');
const router = express.Router();


const {Candidate, Language} = require('../db.js');


router.get("/", async (req, res, next) =>{
    try {
        const language = await Language.findAll();
        res.json(language)
    } catch (error) {
        next(error)
    }
})

    

router.post('/', async (req, res, next) => {
    const { language } = req.body;
    try{

        const [encontrado, creado] = await Language.findOrCreate({
            where:{language: language}})
        if(creado === true){
            res.send(`El idioma ${language} fue creado correctamente`);
        }else{
            res.send(`El idioma ${language} ya existe`)
        }

    }catch(error){
        next(error)
    }
})


router.post('/:candidate', async (req, res, next) => {
    const { candidate } = req.params;
    const { language, level } = req.body;

    try{
        const encontradoE = await Candidate.findByPk(candidate);
        const encontradoL = await Language.findOne({
            where:{
                language: language
            }
        });
        if(encontradoE && encontradoL){
            await encontradoE.addLanguage(encontradoL, { through: {level: level}})
            res.send(`El idioma ${language} fue agregado correctamente a el usuario ${encontradoE.name}`)
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
        const lg = await Language.findByPk(id);

        
        if(lg){
            await lg.destroy();
            res.json({msg: "el lenguaje se elimino correctamente"})
        }else{
                res.json({msg: "el lenguaje no existe"})

            }
        } catch(error){
            next(error)
       
    }
})


router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { native, level } = req.body;
    try{
        const encontrado = await Language.findByPk(id);

        let nativo = encontrado.dataValues.native 
        let nivel= encontrado.dataValues.level 

        const actualizacion = await encontrado.update({
            native: native || nativo, 
            level: level || nivel   
        })
        res.status(200).json(actualizacion);
    }catch(error){
        next(error);
    }
    
})


module.exports = router;