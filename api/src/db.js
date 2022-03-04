require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
// console.log(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME);

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, //
  // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Candidate, Recruiter, Softskill,Technicalskills, Contacted, Language,  Orientation, Project_experience, Formation, Folders, Favorite} = sequelize.models;
console.log(sequelize.models)
// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Candidate.belongsToMany(Recruiter, { through: Favorite, foreignKey: 'idcandidate' });
Recruiter.belongsToMany(Candidate, { through: Favorite, foreignKey: 'idrecruiter' });

Candidate.belongsToMany(Softskill, {through: 'candidate_softskill'});
Softskill.belongsToMany(Candidate, {through: 'candidate_softskill'});

Candidate.belongsToMany(Technicalskills, {through: 'canidate_technicalskill'});
Technicalskills.belongsToMany(Candidate, {through: 'canidate_technicalskill'});

Candidate.belongsToMany(Contacted, {through: 'candidate_contacted'});
Contacted.belongsToMany(Candidate, {through: 'candidate_contacted'});

Candidate.belongsToMany(Language,{through: 'candidate_language'});
Language.belongsToMany(Candidate, {through: 'candidate_language'});

Candidate.belongsToMany(Orientation, {through: 'candidate_orientation'});
Orientation.belongsToMany(Candidate, {through: 'candidate_orientation'});

Candidate.belongsToMany(Project_experience, {through: 'candidate_experiencie'});
Project_experience.belongsToMany(Candidate, {through: 'candidate_experiencie'});

Candidate.belongsToMany(Formation, {through: 'candidate_formation'});
Formation.belongsToMany(Candidate, {through: 'candidate_formation'});

Recruiter.hasMany(Contacted); 
Contacted.belongsTo(Recruiter);

Folders.belongsToMany(Candidate, {through: 'folder_candidate' });
Candidate.belongsToMany(Folders, {through: 'folder_candidate' });

Recruiter.hasMany(Folders);
Folders.belongsTo(Recruiter);









module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  Op     // para importart la conexión { conn } = require('./db.js');
};
