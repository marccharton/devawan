const { User } = require("../models");
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const userController = {

    signupPage: (req, res) => {
      res.render('signup');
    },

    signupAction: async (req, res) => {
      try {
        const user = await User.findOne({
          where: {
            email: req.body.email
          }
        });

        if (user) {
          return res.render('signup', {
            error: "Cet email est déjà utilisé par un utilisateur."
          });
        }    

        // - 2: format d'email valide
        if (!emailValidator.validate(req.body.email)) {
          res.render("signup", {
            error: "Cet email n'est pas valide."
          })
        }

        // - 3: le mdp et la confirmation ne correspondent pas
        if (req.body.password !== req.body.passwordConfirm) {
          return res.render('signup', {
            error: "Les deux mots de passe sont différents"
          });
        }

        if (req.body.password.length <= 6) {
          return res.render('signup', {
            error: "Votre mot de passe doit contenir au moins 7 caractères."
          });
        }

        // - 4: Si on avait le courage, vérifier que le mdp répond aux recommendations CNIL...
        const encryptedPwd = await bcrypt.hash(req.body.password, 10);
  
        // Si on est tout bon, on crée le User !
        let newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: encryptedPwd,
          status: 1,
        });
        
        // on attend que l'utilisateur soit enregistré
        await newUser.save();
        res.redirect('/login');
      
      } catch (error) {
        res.render("error", { error });
      }
    },

    loginPage: (req, res) => {
      res.render('login');
    },

    loginAction: async (req, res) => {
      try {
        const user = await User.findOne({
          where: {
            email: req.body.email
          }
        });

        if (!user) {
          res.render("login", {
            error: "Impossible de vous connecter à devawan."
          });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.render("login", {
            error: "Impossible de vous connecter à devawan. Mauvais mot de passe."
          });
        }

        req.session.user = user;

        delete req.session.user.password;

        res.redirect("/");
        
      } catch (error) {
        return res.render("error", {error});
      }
    },

    logout: (req, res) => {
      req.session.user = false;
      return res.redirect("/");
    },

    profilePage: (req, res) => {
      // if (!req.session.user) {
      //   return res.redirect('/login');
      // }
      
      res.render('profile', {
        user: req.session.user
      });
    }

}

module.exports = userController; 