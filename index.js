// npm init -y 
// npm i nodemon -g
// npm i express


const express = require('express');

// Crear el servidor de express}

const app = express();

// rutas

app.get("/",(req,res)=>{
    console.log("se requiere el /");
    res.json({
        ok:true
    })
})

// ecuchar peticiones

app.listen(4000, ()=>{
    console.log(`servidor corriendo en puerto ${4000}`);

});
