const {response} = require('express');
const { validationResult } = require('express-validator');


const crearUsuario = (req , res = response)=>{ 

    const {name, email, password} = req.body;

    // manejo de errores
    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        });
    }


    return res.status(201).json({
        ok:true,
        msg:"register",
        name,
        email,
        password
    })
}

const login = (req,res=response)=>{
    const {email, password} = req.body;

    const errors = validationResult(req) ;
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        });
    }

    return res.status(201).json({
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