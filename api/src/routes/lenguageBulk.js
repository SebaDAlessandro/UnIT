const express = require('express');
const router = express.Router();

const {Language} = require('../db.js');

router.post("/", async (req, res, next) =>{
    const {lenguage} = req.body;
    try {
        const softskills = await Language.bulkCreate(lenguage);
        res.json({msg: "Los leguaajes se guardaron correctamente"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;