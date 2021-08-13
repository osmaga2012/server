// Requires

var express = require('express');


// Inicializar variables

var app = express();


//rutas

app.get( '/', ( req, res, next) => {  

    res.status(200).json({
        ok:true,
        mensaje: 'Peticion realizada correactamente'
    })


});


// Escuchar peticiones

app.listen(3000, ()=>{

       console.log('Express corriendo en puerto 3000') 

});
