const { Exercice } = require('../models');

const MainController = {

    home: async (req, res, next) => {
      res.redirect("/exercice");
    }
    
}

module.exports = MainController;