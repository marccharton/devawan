const express =require("express");
const os =require('os'); 
const dotenv =require("dotenv");
dotenv.config();

const router = require("./app/router");

const nodePort= process.env.PORT || "8080"; 
const app= express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

//app.use(express.static('./app/views'));
app.use(express.static("public"));

app.use(router);

app.listen(nodePort, () => console.log('Server listenning on http://' + os.hostname() + ':' + nodePort + '/'));