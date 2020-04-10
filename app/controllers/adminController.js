const adminController = {
    homePage: (req, res) => {
        res.redirect("/admin/exercice");
    },
    
    addExercicePage: (req, res) => {
        res.render("admin", {isAdminMode:true});
    },

    addExerciceAction: (req, res) => {
        return res.send(req.body);
    },
};

module.exports = adminController;