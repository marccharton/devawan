
const loginController = {

    signupPage: (req, res) => {
      res.render('signup');
    },

    loginPage: (req, res) => {
      res.render('login');
    }
    
}

module.exports = loginController;