const express = require('express')
const server = express()
require('dotenv').config()

server.get("/", function(requisicao, resposta){
    return resposta.json({"response":process.env.TEXT})
})


server.get("/user/", function(requisicao, resposta){
    return resposta.json({"response":"você está na rota /user/"})
})

server.get("/user/:id", function(requisicao, resposta){
    return resposta.json({"response":"você está na rota/user/:id o id digitado foi: "+ requisicao.params.id})
})

server.get("/*", function(requisicao, resposta){
    return resposta.json({"response":"rota não existe"})
})


server.listen(process.env.PORT, function(){
    
    console.log('server is runnig na porta: ' + process.env.PORT)
}) 