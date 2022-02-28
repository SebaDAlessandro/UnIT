const express = require('express');
const router = express.Router();
const {favoritesPost} = require('../controllers/favoritesRoutes');

const {Recruiter} = require('../db.js');


router.post('/', async (req, res, next) => {

    const {idrecruiter, idcandidate} = req.body;
            // (1) ,      [1,8]x  (1)
    
    let favor = favoritesPost(idcandidate)

    try {
    
        const encontrado = await Recruiter.findOne({
            where: {id: idrecruiter}})

        const creado = await encontrado.addCandidate(favor)
        res.json(creado)

    } catch(error){
        next(error);
    }
})


module.exports = router;