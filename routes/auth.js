/*

    rutas de usuarios /auth
    host + /api/auth
*/
const {Router} = require('express');
const router = Router();
const {crearUsuario, login, renew} = require('../controllers/auth')



router.post("/new",crearUsuario);


router.post("/",login);


router.get("/renew",renew);


module.exports = router;