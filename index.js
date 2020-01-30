
//================================
// SERVER
//================================

//REQUIRES
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
require("./config/config");

//SETTINGS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));

//FUNCTIONS
app.post('/user',(req,res)=>{
    let body = req.body;
    console.log(body.nombre)
    if(body.nombre === ""){
        res.status(400).json({
            status : "fail",
            mensagem : "el nombre es necesario"
        })
    }
    else{
        res.status(200).json({
            status : 200,
            body: body
        })
    }
})

//LISTEN SERVER
app.listen(process.env.PORT ,()=>{
    console.log(`escuchando en el puerto ${process.env.PORT}`);
})

