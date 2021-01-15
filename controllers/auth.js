const {response} = require('express');
const { validationResult } = require('express-validator');
const User = require('../models/User');


const crearUsuario = async (req , res = response)=>{ 

    try {
        const {name, email, password} = req.body;
        const usuario = new User(req.body);
        await usuario.save();
        return res.status(201).json({
        ok:true,
        msg:"register",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"error interno hable con el admin",
        })
    }
}

const login = (req,res=response)=>{
    const {email, password} = req.body;

    

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