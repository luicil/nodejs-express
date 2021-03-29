const express = require("express");
const app = express();

const port = 80;

app.get("/", function(req, res){
    res.send("<h1>Acessou</h1>")
});

app.get("/blog", function(req, res){
    res.send("Blogou !");
});

app.get("/ola/:nome/:sobrenome?",function(req, res){
    let txt = req.params.nome;
    const fulano = req.query["fulano"]
    if(req.params.sobrenome){
        txt += " " + req.params.sobrenome
    }
    if(fulano){
        txt += " fulano: " + fulano
    }
    res.send("Olá: " + txt)
});


app.listen(port, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado na porta: " + port );
    }
});