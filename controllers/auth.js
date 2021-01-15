const {response} = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');



const crearUsuario = async (req , res = response)=>{ 

    try {
        const { email, password} = req.body;
        let usuario = await User.findOne({email})
        if(usuario){
            return res.status(400).json({
                ok:false,
                msg:"ya existe un usuario con el correo"
            });
        }
        
        usuario = new User(req.body);
        // encryptar password
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt); 

        await usuario.save();
        return res.status(201).json({
        ok:true,
        uid: usuario.id,
        name: usuario.name
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:"error interno hable con el admin",
        })
    }
}

const login = async (req,res=response)=>{    
    try {
        const {email, password} = req.body;
        const usuario = await User.findOne({email})
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:"el usuario no existe con el email"
            });
        }
        // confirmar los password

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:"password incorrecto"
            });
        }
        // 
        // generar JWT
        
        return res.status(201).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:"error interno hable con el admin",
        })
    }

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