// npm init -y 
// npm i nodemon -g
// npm i express
// vareables de entorno    npm i dotenv

const express = require('express');
require("dotenv").config();


// Crear el servidor de express}

const app = express();


// directorio publico

app.use(express.static("public"));

// rutas
app.use("/api/auth",require("./routes/auth"));
//TODO: CRUD: Events





// ecuchar peticiones

app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);

});
