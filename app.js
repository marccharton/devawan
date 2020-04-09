const express =require("express");
const os =require('os'); 
const dotenv =require("dotenv");
const session = require('express-session');
dotenv.config();

const router = require("./app/router");

const nodePort= process.env.PORT || "8080"; 
const app= express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

// les statiques
//app.use(express.static('./app/views'));
app.use(express.static('public'));

// on rajoute la gestion des POST body
app.use(express.urlencoded({extended: true}));

// et on rajoute la gestion des sessions
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'Un Super Secret'
}));

// et hop, notre middleware magique
const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);

app.use(router);

app.listen(nodePort, () => console.log('Server listenning on http://' + os.hostname() + ':' + nodePort + '/'));