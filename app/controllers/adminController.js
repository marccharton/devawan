const adminController = {
    homePage: (req, res) => {
        
        res.render("admin", {isAdminMode:true});
    },
};

module.exports = adminController;