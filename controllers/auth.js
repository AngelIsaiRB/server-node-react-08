const {response} = require('express');


const crearUsuario = (req , res = response)=>{   
    res.json({
        ok:true,
        msg:"register"
    })
}

const login = (req,res=response)=>{
    console.log("se requiere el /");
    res.json({
        ok:true,
        msg:"login"
    })
}


const renew = (req,res = response)=>{
    console.log("se requiere el /");
    res.json({
        ok:true,
        msg:"renew"
    })
}

module.exports = {
    crearUsuario,
    login,
    renew
}