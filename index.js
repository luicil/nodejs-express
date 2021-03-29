const express = require("express");
const app = express();

const port = 80;

app.get("/", function(req, res){
    res.send("<h1>Acessou</h1>")
});


app.listen(port, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado na porta: " + port );
    }
});