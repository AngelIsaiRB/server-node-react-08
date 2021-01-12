const {response} = require('express');


const crearUsuario = (req , res = response)=>{ 

    const {name, email, password} = req.body
    res.json({
        ok:true,
        msg:"register",
        name,
        email,
        password
    })
}

const login = (req,res=response)=>{
    const {email, password} = req.body;
    res.json({
        ok:true,
        msg:"login",
        email,
        password
    })
}


const renew = (req,res = response)=>{
   
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