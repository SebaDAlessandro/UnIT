const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const {Admin} = require('../db.js');

router.post('/', async (req, res, next) => {
    const {name, lastname, email, location, image, password} = req.body;

    const codificar = await bcryptjs.hash(password, 10);

    try {
        const administrador = await Admin.create({
            name,
            lastname,
            email,
            location,
            image,
            password: codificar
        })
        res.json({msg: `Se ha cargado como Administrador a: ${name} ${lastname}.`})    
    } catch (error) {
        next(error)   
    }
})

router.get('/:id', async(req, res, next) => {
    const {id} = req.params
    try {
        const administrador = await Admin.findByPk(id)
        res.json(administrador);
    } catch (error) {
        next(error)
    }
})

router.get('/', async(req, res, next) => {
    try {
        const administrador = await Admin.findAll({})
        res.json(administrador);
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
      const administrador = await Admin.findByPk(id)
  
      if(administrador){
        await administrador.destroy();
        res.send(`Administrador eliminado correctamente`)
      }
    }catch(error){
      next(error)
    }
  })

  router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const {name, lastname, email, location, image, password} = req.body;
    try{
        const encontrado = await Admin.findByPk(id);

        let nombre = encontrado.dataValues.name 
        let apellido= encontrado.dataValues.lastname 
        let correo = encontrado.dataValues.email 
        let locacion = encontrado.dataValues.location
        let imagen = encontrado.dataValues.image
        let contraseña = encontrado.dataValues.password

        const actualizacion = await encontrado.update({
            name: name || nombre, 
            lastname: lastname || apellido, 
            email: email || correo, 
            location: location || locacion, 
            image: image || imagen,
            password: password || contraseña        
        })
        res.json(actualizacion);
    }catch(error){
        next(error);
    }  
})


module.exports = router;
