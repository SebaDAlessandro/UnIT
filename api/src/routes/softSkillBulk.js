const express = require('express');
const router = express.Router();

const {Candidate, Softskill} = require('../db.js');

router.post("/", async (req, res) =>{
    const {todos3} = req.body;
    try {
        const softskills = await Softskill.bulkCreate(todos3);
        res.json({msg: "Los softskills se guardaron correctamente"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;