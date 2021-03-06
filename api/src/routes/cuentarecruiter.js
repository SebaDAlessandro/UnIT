const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = process.env;


const {Recruiter, Contacted, Candidate, Language, Technicalskills, Project_experience, Softskill, Orientation} = require('../db.js');

router.get('/', async (req, res, next) => {
    try{
        const recruiter = await Recruiter.findAll({
            include: [{model: Contacted},{model: Candidate}]
        })
        res.json(recruiter)
    }catch(error){
        next(error)
    }
})


router.post('/', async (req, res, next)=> {
    const {name, lastname, email, organization, password, image, location, description} = req.body;
    const passwords = await bcryptjs.hash(password, 10);
    try {
        const recruiter = await Recruiter.create({
            name,
            lastname,
            email,
            organization,
            password: passwords,
            image,
            location,
            description
            })
        res.send(`El recruiter ${name} fue creado correctamente`)    
    } catch (error) {
        next(error)
    }
})


router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, lastname, email, organization, password, image, location, description } = req.body;
    try{
        const encontrado = await Recruiter.findByPk(id);

        let nombre = encontrado.dataValues.name 
        let apellido= encontrado.dataValues.lastname 
        let correo = encontrado.dataValues.email 
        let organizacion = encontrado.dataValues.organization
        let contraseña = encontrado.dataValues.password
        let imagen = encontrado.dataValues.image
        let locacion = encontrado.dataValues.location 
        let descripcion = encontrado.dataValues.description

        const actualizacion = await encontrado.update({
            name: name || nombre, 
            lastname: lastname || apellido, 
            email: email || correo, 
            organization: organization || organizacion, 
            password: password || contraseña, 
            image: image || imagen, 
            location: location || locacion, 
            description: description || descripcion
        
        })
        res.status(200).json(actualizacion);
    }catch(error){
        next(error);
    }
    
})


// http://localhost:3001/cuentarecruiter/login
router.get("/login", async (req, res, next) => {
    const {email} = req.body;
    
    try{
        const recruiter = await Recruiter.findOne({ where: { email: email }, })
        
        if(recruiter){
            res.json(recruiter)
        }else{
            const candidate = await Candidate.findOne({ 
                where: { email: email },
                include: [
                    {model: Language}, {model: Contacted}, {model: Technicalskills}, {model: Softskill}, {model: Project_experience}, {model: Orientation}
                ]
             })

            if(candidate){
                res.json(candidate)
            }

            if(!candidate && !recruiter){
                res.json({msg: "Este mail no esta asociado a ninguna cuenta"})
            }
        }
        


    } catch(error){
        next(error)
    }
})

//VERIFICAR SI EXISTE EL MAIL, TANTO EN LA TABLA DE CANDIDATOS COMO EN LA DE RECRUITER
router.post("/loginrecruiter", async (req, res) => {
    // TODO: >> http://localhost:3001/cuentarecruiter/loginrecruiter <<

    const { email, password } = req.body

    console.log(email, password, "Email, Password")

    const userToken = {
        email,
        password
    }
    const token = jwt.sign(userToken, SECRET, { expiresIn: "1h" })
    const recruiter = await Recruiter.findOne({ where: { email: email }, })
    const candidate = await Candidate.findOne({ where: { email: email }, })

    try {
            if (recruiter) {
                const passwords = await bcryptjs.compare(password, recruiter.password)
                if (passwords) {
                    const data = {
                        id: recruiter.id,
                        email: recruiter.email,
                        image: recruiter.image,
                        token
                    }
                    res.json(data)
                } else {
                    res.send("Ingrese datos validos")
                }

            } else { 
                console.log(email, password, "Email, Password 2")
                const passwordValidated = await bcryptjs.compare(password, candidate.password)
                if (passwordValidated) {
                    const dataCandidate = {
                        id: candidate.id,
                        email: candidate.email,
                        image: candidate.image,
                        token
                    }
                    res.send(dataCandidate)
                } else {
                    
                    res.send('password incorrecto')
                }
            }      
    }

    catch (error) {
        res.send(error.message)
    }
  })

  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
      const recruiter = await Recruiter.findByPk(id)
  
      if(recruiter){
        await recruiter.destroy();
        res.send(`Recruiter eliminado correctamente`)
      }
    }catch(error){
      next(error)
    }
  })

module.exports = router;




