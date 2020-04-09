const { Exercice } = require('../models');

const exerciceController = {

    list: async (req, res, next) => {
      try {
        const exerciseList = await Exercice.findAll();
        res.render('index', {exerciseList});
      } catch(err) {
        console.trace(err);
        res.status(500).render('error', {err});
      };
    }
    
}

module.exports = exerciceController;