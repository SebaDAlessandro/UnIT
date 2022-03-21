const express = require('express');
const router = express.Router();

const {Location} = require('../db.js');

router.post("/", async (req, res, next) =>{
    const {location} = req.body;
    try {
        await Location.bulkCreate(location);
        res.json({msg: "Las Locaciones se guardaron correctamente"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;