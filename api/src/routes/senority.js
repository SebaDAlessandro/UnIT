const router = require('express').Router();
const {Candidate, Senorit} = require('../db.js');

router.get('/', async (req, res, next) => {
    try {
        const seniority = await Senorit.findAll();
        if(seniority.length > 0){
            console.log('desde la DB')
            res.json(seniority);
        }else{
            console.log('desde el bulk')
            const seniory = [{senority: "Trainee" }, {senority: "Junior"},{senority:"Junior Plus"}, {senority:"Semi senior"}, {senority:"Senior"}];
            const senio = await Senorit.bulkCreate(seniory);
            res.json(senio);
        }
    } catch (error) {
        next(error)
    }
});

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