const router = require('express').Router();
const {Candidate, Senorit} = require('../db.js');

router.get('/', async(req, res, next) => {
    try {
        const señority = await Senorit.findAll({
            include: [
                {model: Candidate}
            ]
        }
        )
        res.json(señority);
    } catch (error) {
        next(error)
    }
})

router.post("/senoryty", async (req, res, next) => {
    const {senorit} = req.body;
    // console.log(senority, "algljssdnckjs");
    try {
        const [encontro, creado] = await Senorit.findOrCreate({where: {senority: senorit}});
        if(creado){
            res.json(creado)
        }else{
           res.send("no se creo") 
        }
    } catch (error) {
        next(error)
    }
})



router.post("/", async (req, res, next) => {
    const {senorit, idCandidate} = req.body;

    try {
        const candidate = await Candidate.findByPk(idCandidate);
        const experincia = await Senorit.findOne({where: {senority: senorit}});
        try{    
            if(senorit){
                await candidate.addSenorit(experincia)
                res.json({msg: "Se ralaciono el Señority con el candidato correctamente"})
            }else{
                res.json({msg: "Upps! algo no salio como esperaba"})
            }
        } catch (error){
            next(error)
        }
        
    } catch (error) {
        
    }
})

module.exports = router;