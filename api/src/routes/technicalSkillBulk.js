const express = require('express');
const router = express.Router();

const {Technicalskills} = require('../db.js');

router.post("/", async (req, res, next) =>{
    const {todos4} = req.body;
    try {
        await Technicalskills.bulkCreate(todos4);
        res.json({msg: "Los TechnicalSkill se guardaron correctamente"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;