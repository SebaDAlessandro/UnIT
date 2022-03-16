const express = require("express");
const router = express.Router();

const { Recruiter, Candidate, Folders } = require("../db.js");


// Obtener la carpeta y sus candidatos
// TODO: >> http://localhost:3001/folders/{id} <<
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let folderById;
  try {
    const folders = await Folders.findByPk(id, { include: Candidate });

    console.log(folders.candidates, "Esta es la funcion de info")
    
    folderById = {
      folderName: folders.folderName,
      candidates: folders.candidates.map((c) => [
        {
          id: c.id,
          nombre: c.name,
          lastname: c.lastname,
          image: c.image,
        },
      ]),
    };

    console.log(folderById, "FolderById")

    res.json(folderById);
  } catch (error) {
    next(error);
  }
});

// Obtener todas las carpetas

router.get("/", async (req, res, next) => {
  // TODO: >> http://localhost:3001/folders <<
  const id = req.params.id;
  try {
    const folders = await Folders.findAll();
    res.json(folders);
  } catch (error) {
    next(error);
  }
});

// Obtener todas las carpetas de un recruiter
// TODO: >> http://localhost:3001/folders/recruiter/:{id} <<
router.get("/recruiter/:id", async (req, res, next) => {
  const id = req.params.id;
  let folderRecruiter;
    try {
      const folders = await Recruiter.findByPk(id,
        {include: Folders});
        console.log(folders, "Estos son los folders")
        folderRecruiter = {
            Recruiter: folders.name,
            Folders: folders.folders.map(f =>{
              return {
                  folderName: f.folderName,
                  folderId: f.id
              }
          }),
        }
      res.json(folderRecruiter);
    } catch (error) {
      next(error);
    }
  });

// Crear carpeta
router.post("/", async (req, res, next) => {
// TODO: >> http://localhost:3001/folders <<
  const { folderName, recruiterId } = req.body;

  try {
    const folder = await Folders.create({
      folderName,
      recruiterId,
    });
    res.json({ msg: "la carpeta se guardo correctamente" });
  } catch (error) {
    res.send(error.message);
  }
});

// Crear relacion Carpeta / Candidato
router.post("/:fId/candidate/:cId", async (req, res, next) => {
  // TODO: >> http://localhost:3001/folders/{idFolder}/candidate/{idcandidato} <<
  try {
    const { fId, cId } = req.params; // destructuring de datos que me pasan por parametros
    const folder = await Folders.findByPk(fId); // busco la carpeta por el id
    await folder.addCandidate(cId); // agrego el recruiter al la carpeta usando mixin de secualize
    res.status(201).send(folder);
  } catch (error) {
    next(error);
  }
});



router.delete('/', async(req, res, next) => {
  const { idFolder } = req.body;
  
  try{
   const dato = await Folders.findByPk(idFolder)
   if(dato){
     let nombre = dato.folderName;
     dato.destroy();
     res.send(`Carpeta ${nombre} fue eliminada con exito`)
   }else{
     res.send("No existe esa Carpate")
   }
  }catch(error){
    next(error)
  }
})

router.delete('/:idFolder/:idUser', async(req, res, next)=>{

  const {idFolder, idUser} = req.params;

  try{

    const carpeta = await Folders.findByPk(idFolder);
    const candidate = await Candidate.findByPk(idUser);

    if(carpeta && candidate){
      const nombre = candidate.name
      carpeta.removeCandidate(candidate);

      res.send(`Se elimino correctamente el candidato ${nombre} de la carpeta ${carpeta.folderName}`)
    }else{
      res.send('El usuario a eliminar no fue encontrado')
    }

  }catch(error){
    next(error)
  }

});



router.put('/', async (req, res, next) =>{
  const { idFolder, folderName } = req.body;
try{
    const dato = await Folders.findByPk(idFolder);

    let nombre = dato.folderName;
    let recruiter = dato.recruiterId;

    const nuevo = await dato.update({
      folderName: folderName || nombre,
      recruiterId: recruiter
    })
    res.status(200).json(nuevo)

}catch(error){
  next(error)
}
})

module.exports = router;
