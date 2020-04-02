import express from "express";
// import exerciseList from "../models/exerciceList";

const exerciseList = require('../models/exerciceList.json');

const mainController = {

    home: function (req:express.Request, res:express.Response) {
        return res.render("index", {exerciseList});
    }
}

export default mainController;