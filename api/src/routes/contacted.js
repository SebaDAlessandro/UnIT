const express = require('express');
const router = express.Router();
const { Recruiter, Candidate, Contacted } = require('../db');


router.post('/', async (req, res, next) => {
    const { idRecruiter, idCandidate, status } = req.body

  try {
    const encontrado = await Recruiter.findOne({
      where: { id: idRecruiter }
    })
    if (encontrado) {
      const encontrado2 = await Candidate.findOne({
        where: { id: idCandidate }
      })

      if (encontrado2) {
        const contactado = await Contacted.create({
          idRecruiter,
          idCandidate,
          status,
          recruiterId: idRecruiter,
          candidateId: idCandidate
        })
        res.status(200).json(contactado)
      } else {
        res.status(404).json({ msg: 'Candidate not found' })
      }
    } 

  }catch(error){
      next(error)
  }
});

router.get('/', async (req, res, next) => {
  try {
    const contactados = await Contacted.findAll({
      include: [{
        model: Candidate,
      }]
    })
    res.status(200).json(contactados)
  } catch (error) {
    next(error)
  }
})

module.exports = router;