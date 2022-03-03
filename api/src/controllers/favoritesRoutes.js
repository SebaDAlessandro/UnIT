const {Candidate} = require('../db')

const favoritesPost = async (idcandidate) => {

    let candidato = await Candidate.findByPk(idcandidate) 
    return candidato;
}

module.exports = {favoritesPost}

/* const favoritesPost = async (idcandidate) => {
    
    let candidato = await Candidate.findByPk(idcandidate) 
    return candidato;
} 
*/

/* const favoritesPost = (idcandidate) => {
    let favor = [];
    idcandidate.map(async c => {
         console.log(c)
     let candidato = await Candidate.findByPk(c) 
     favor.push(candidato)
    })
    return favor;
} 
*/