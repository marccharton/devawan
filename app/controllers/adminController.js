const { Exercice } = require("../models");

const adminController = {

    viewParam: {
        isAdminMode: true
    },

    homePage: (req, res) => {
        res.redirect("/admin/exercice");
    },
    
    addExercicePage: (req, res) => {
        res.render("admin", {isAdminMode: true});
    },

    addExerciceAction: async (req, res) => {
        
        try {
            const exercice = await Exercice.findOne({
                where: {
                    name: req.body.name
                }
            });

            if (exercice) {
                return res.render("admin", {
                    ...this.viewParam, 
                    error: "Un exercice avec le même nom existe déjà",
                });
            }
            
            let newExercice = new Exercice({
                name: req.body.name,
                description: req.body.description,
                correction: req.body.correction,
            });
            await newExercice.save();
    
            res.render("admin", { 
                ...this.viewParam, 
                information: "Exercice enregistré :)" 
            });

        } catch (error) {
            res.render("error", { error });
        }
    },
};

module.exports = adminController;