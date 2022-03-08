const express = require('express');
const router = express.Router();


const {Candidate, Language} = require('../db.js');

// router.post("/", async (req, res) => {
//     // en el req.body tomo toda la informacion que viene del front
//     const {language, native, level, idCandidate} = req.body;
//     try {
//         const can = await Candidate.findByPk(idCandidate);
//         if(can){
//         // En la tabla Language creo un nuevo registro con los datos del front
//         const languages = await Language.create({
//             language,
//             native,
//             level
//         })
        
//         // Pregunto de tengo los datos del lenguaje y el id del candidato
//         if(languages){
//             // Busco el candidato por el id (ya viene del front) y lo guardo en "candidate"
//             // const candidate = await Candidate.findByPk(idCandidate);
//             // Con el id del candidato y con la info de lenguajes se llena la tabla intermedia y se crea la relacion  
//             can.addLanguage(languages);
//         }
//         res.json({msg: "el lenguaje se guardo correctamente"})
//         }
//     } catch (error) {
//         res.status(404).json({msg: "hubo un error"})
//     }
// })

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