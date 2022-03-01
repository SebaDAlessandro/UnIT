const express = require('express');
const router = express.Router();
const { Recruiter, Candidate, Contacted } = require('../db');


router.post('/', async (req, res, next) => {
    const { idrecruiter, idcandidate, status } = req.body

  try{

    const recruiterE = await Recruiter.findOne({ 
        where:{id: idrecruiter}})

    const candidateE = await Candidate.findOne({ 
        where:{id:idcandidate}})
    
    
    

  }catch(error){
      next(error)
  }
});

module.exports = router;