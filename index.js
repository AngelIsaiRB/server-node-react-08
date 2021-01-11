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

// app.get("/",(req,res)=>{
//     console.log("se requiere el /");
//     res.json({
//         ok:true
//     })
// });


// ecuchar peticiones

app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en puerto ${4000}`);

});
