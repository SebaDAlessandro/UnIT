const express = require('express');
const router = express.Router();


const {Candidate, Language} = require('../db.js');

//! MEJORAR ESTA RUTA
router.post("/", async (req, res) => {
    // en el req.body tomo toda la informacion que viene del front
    const {language, native, level, idCandidate} = req.body;
    try {
        // En la tabla Language creo un nuevo registro con los datos del front
        const languages = await Language.create({
            language,
            native,
            level
        })
        // Pregunto de tengo los datos del lenguaje y el id del candidato
        if(languages && idCandidate){
            // Busco el candidato por el id (ya viene del front) y lo guardo en "candidate"
            const candidate = await Candidate.findByPk(idCandidate);
            // Con el id del candidato y con la info de lenguajes se llena la tabla intermedia y se crea la relacion  
            candidate.addLanguage(languages);
        }
        res.json({msg: "el lenguaje se guardo correctamente"})    
    } catch (error) {
        res.status(404).json({msg: "hubo un error"})
    }
})


module.exports = router;