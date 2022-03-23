const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const {Candidate, Language, Contacted, Technicalskills, Project_experience, Softskill, Orientation, Location, Senorit, Gender, Level} = require('../db.js');


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
  
    const {name, lastname, email, description, status, image, password, linkedin, github, portfolio, cv, location, senority, orientation, gender, sskill, tskill, language, level} = req.body;
   console.log(language, level, "desde el body")
    const passwords = await bcryptjs.hash(password, 10);
    const local = await Location.findOne({where:{location:location}})
    const capacidad = await Senorit.findOne({where:{senority:senority}})
    const orientacion = await Orientation.findOne({where:{name: orientation}})
    const genero = await Gender.findOne({where:{gender:gender}})

    const encontrado = await Candidate.findOne({
        where:{
          email:email
        }
      })
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

              if(local || senority || orientation || gender|| sskill || tskill || language){
                const encontrado = await Candidate.findOne({where:{email:email}})
              
                if(local){
                  await local.addCandidate(encontrado)
                }

                if(senority){
                  await capacidad.addCandidate(encontrado)
                }

                if(orientacion){
                  await orientacion.addCandidate(encontrado)
                }

                if(genero){
                  await genero.addCandidate(encontrado)
                }

                if(sskill){
                  const skill = await Softskill.findAll({where:{soft_skill:sskill}})
                  // console.log(skill, "desde el if de skill")
                  await encontrado.addSoftskill(skill)
                }

                if(tskill){
                  const tkill = await Technicalskills.findAll({where:{technicalskills:tskill}})
                  await encontrado.addTechnicalskills(tkill)
                }

                if(language){
                  for(let i = 0; i < language.length; i++){
                    const lenguaje = await Language.findOne({where:{language:language[i]}})
                    await encontrado.addLanguage(lenguaje, {through: {level: level[i]}})
                  }
                }
                res.json({"msg": "Se relaciono el candidato correctamente"})
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
    console.log(id, "desde el id")
      
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
