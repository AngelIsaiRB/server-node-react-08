const {response} = require('express');


const crearUsuario = (req , res = response)=>{ 

    const {name, email, password} = req.body;

    if(name.length < 5 ){
        return res.status(400).json({
            ok:false,
            msg:"el name debe ser de minimo 5 letras"
        });
    }

    return res.json({
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