const {Candidate} = require('../db')


const favoritesPost = (idcandidate) => {
    let favor = [];
    idcandidate.map(async c => {
         console.log(c)
     let candidato = await Candidate.findByPk(c) 
     favor.push(candidato)
    })
    return favor;
}

module.exports = {favoritesPost}