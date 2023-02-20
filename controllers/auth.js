const { response } = require('express');
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario');

const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req, res = response) => {
    console.log(req.body);
    const { user, password } = req.body;

    try {
      
        // Verificar si el email existe
        const usuario = await Usuario.findOne({ user });
        if ( !usuario ) {
            return res.json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // SI el usuario está activo
        if ( !usuario.estado ) {
            return res.json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Hable con el administrador'
        });
    }   

}

const validarTokenUsuario = async (req, res = response ) => {

    // Generar el JWT
    const token = await generarJWT( req.usuario._id );
    
    res.json({
        usuario: req.usuario,
        token: token,
    })

}



module.exports = {
    login,
    validarTokenUsuario
}
