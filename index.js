const express = require("express");
const app = express();

const port = 10;

app.listen(port, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado na porta: " + port );
    }
})