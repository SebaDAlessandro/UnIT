const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const {Candidate, Language, Contacted, Technicalskills, Project_experience, Softskill, Orientation, Location, Senorit, Gender} = require('../db.js');


router.get('/', async(req, res, next) => {
    try {
        const candidates = await Candidate.findAll({
            include: [
                {model: Gender}, {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}, {model: Location},{model: Senorit}
            ]
        })
        res.json(candidates);
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
  
    const {name, lastname, email, description, status, image, password, linkedin, github, portfolio, cv, location } = req.body;
  
    const passwords = await bcryptjs.hash(password, 10);
    const local = await Location.findOne({where:{location:location}})
      const encontrado = await Candidate.findOne({
        where:{
          email:email
        }
      })
      console.log(encontrado)
      if(encontrado){
        res.send("El usuario con este mail ya exite")
      }else{
            try {
              const candidate = await Candidate.create({
                  name,
                  lastname,
                  email,
                  status,
                  image,
                  password: passwords,
                  description,
                  linkedin,
                  github,
                  portfolio,
                  cv
      
              })
              if(candidate && local){
                const encontrado = await Candidate.findOne({where:{email:email}})
                await local.addCandidate(encontrado)
                res.json({msg: "el candidato se guardo correctamente + location"})    
              }
              res.json({msg: "el candidato se guardo correctamente"})    

            
          } catch (error) {
              res.send(error)
              
          }
      
        }
    
})

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, lastname, email, description, linkedin, github, portfolio, status, image, cv, password, gender, location } = req.body;
    try{
        const encontrado = await Candidate.findByPk(id);
        const gn = await Gender.findOne({where: {gender: gender}});
        const lc = await Location.findOne({where: {location: location}});

        let nombre = encontrado.dataValues.name 
        let apellido= encontrado.dataValues.lastname 
        let correo = encontrado.dataValues.email 
        let descripcion = encontrado.dataValues.description
        let newLinkeding = encontrado.dataValues.linkedin
        let newGithub = encontrado.dataValues.github
        let newPortfolio = encontrado.dataValues.portfolio
        let estado = encontrado.dataValues.status
        let imagen = encontrado.dataValues.image
        let newCv = encontrado.dataValues.cv
        let contraseña = encontrado.dataValues.password
        let genero = encontrado.dataValues.genderId
        let locacion = encontrado.dataValues.locationId

        const actualizacion = await encontrado.update({
            name: name || nombre, 
            lastname: lastname || apellido, 
            email: email || correo, 
            description: description || descripcion,
            linkedin: linkedin || newLinkeding,
            github: github || newGithub,
            portfolio: portfolio || newPortfolio,
            status: status || estado,
            image: image || imagen,
            cv: cv || newCv,
            password: password || contraseña,
            genderId: gn.id || genero,
            locationId: lc.id || locacion        
        })
        res.status(200).json(actualizacion);
    }catch(error){
        next(error);
    }
    
})


router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
      
      try{
        if(id){
          const candidato = await Candidate.findByPk(id,{
            include: [
                {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Location}, {model: Project_experience}, {model: Orientation},{model: Senorit}
            ]
          })
          if(candidato != 0){
            res.json(candidato)
          }else{
            res.send("No existe ese candidato")
          }
        }
      }catch(error){
        next(error)
      }
  
  })

  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
      const candidato = await Candidate.findByPk(id)
  
      if(candidato){
        await candidato.destroy();
        res.send(`Candidato eliminado correctamente`)
      }
    }catch(error){
      next(error)
    }
  })



module.exports = router;
