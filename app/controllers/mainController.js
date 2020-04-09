// import express from "express";
const { Exercice } = require('../models');

// import exerciseList from "../models/exerciceList";

//const exerciseList = require('../models/exerciceList.json');

const mainController = {

    home: function (req, res, next) {
        // return res.render("index", {exerciseList});

        // // on va chercher tous les quizzes dans la DB...
        Exercice.findAll().then( exerciseList => {
          // ... si tout est ok, je render ma view
          // console.log(quizzes);
          res.render('index', {exerciseList});
    
        }).catch( err => {
          // ... si j'ai une erreur, on affiche une view "erreur"
          console.trace(err);
          res.status(500).render('error', {err});
        });
        //res.send({"pouet":"coucou"});
    }

    
}

module.exports = mainController;