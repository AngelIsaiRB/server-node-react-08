// npm init -y 
// npm i nodemon -g
// npm i express
// vareables de entorno    npm i dotenv

const express = require('express');
const { dbConnection } = require('./DB/config');
require("dotenv").config();


// Crear el servidor de express}

const app = express();

// DB
dbConnection();


// directorio publico

app.use(express.static("public"));


// lectura y parseo del body

app.use(express.json());



// rutas
app.use("/api/auth",require("./routes/auth"));
//TODO: CRUD: Events





// ecuchar peticiones

app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);

});
