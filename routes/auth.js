/*

    rutas de usuarios /auth
    host + /api/auth
*/
const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();
const {crearUsuario, login, renew} = require('../controllers/auth')



router.post(
    "/new",
    [ //middlewares
        check("name","el nombre es obligatorio").not().isEmpty(),
        check("email","el email es obligatorio").isEmail(),
        check("password","el password es obligatorio").not().isEmpty(),
        check("password","el password debe ser mayor de 6 caracteres").isLength({min:6}),
    ],
    crearUsuario);


router.post(
    "/",
    [
        check("email","el email es obligatorio").isEmail(),
        check("password","el password debe ser mayor de 6 caracteres").isLength({min:6}),
    ],
    login);


router.get("/renew",renew);


module.exports = router;