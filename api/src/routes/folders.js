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
    
    folderById = {
      folderName: folders.folderName,
      candidates: folders.candidates.map((c) => [
        {
          nombre: c.name,
        },
      ]),
    };

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

        folderRecruiter = {
            Recruiter: folders.name,
            Folders: folders.folders.map(f => f.folderName)
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
    res.send(error);
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

module.exports = router;
