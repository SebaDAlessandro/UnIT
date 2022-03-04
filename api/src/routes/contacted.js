const express = require('express');
const router = express.Router();
const { Recruiter, Candidate, Contacted } = require('../db');

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
    
    try{
      if(id){
        const contactosEncontrados = await Recruiter.findByPk(id,{
          include: [
            {model: Contacted}
          ]
        })
        if(contactosEncontrados != 0){
          res.json(contactosEncontrados)
        }else{
          res.send("No tenes candidatos contactados")
        }
      }
    }catch(error){
      next(error)
    }

})


router.post('/', async (req, res, next) => {
    const { idrecruiter, idcandidate, status, details, date, status_contact, position } = req.body

  try{

    const recruiterE = await Recruiter.findByPk(idrecruiter)

    const candidateE = await Candidate.findByPk(idcandidate)

    if(recruiterE && candidateE){

      const contacted = await Contacted.create({
        idCandidate:idcandidate,
        status,
        details,
        date,
        status_contact,
        position
      })

      await recruiterE.addContacted(contacted)
      res.json(contacted)
    } else {
      res.send("no")
    }

  }catch(error){
      next(error)
  }
});


router.delete('/', async (req, res, next) => {
  const { id } = req.body;
  try{
    const contacteds = await Contacted.findByPk(id)

    if(contacteds){
      await contacteds.destroy();
      res.send(`contacto ${id} eliminado`)
    }
  }catch(error){
    next(error)
  }
})


router.put('/', async (req, res, next) => {
   const { idcontacted, status, details, date, status_contact, position} = req.body;
  try{
    const encontrado = await Contacted.findByPk(idcontacted)
    
    const mod = await encontrado.update({
      status,
      details,
      date,
      status_contact,
      position
    })
    res.json(mod)
  }catch(error){
    next(error)
  }
})




module.exports = router;