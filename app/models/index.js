// SoC: Le rôle de ce fichier est de définir les associations entre les différents models !

// 1. D'abord, require tous nos modèles
const Exercice = require('./Exercice');
const User = require('./user');

// 2. définir toutes les associations

// 3. réexporter tout ça dans un joli module.
module.exports = {
  Exercice,
  User
};