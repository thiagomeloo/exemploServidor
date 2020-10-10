const express = require('express')
const server = express()
require('dotenv').config()

server.get("/", function(requisicao, resposta){
    return resposta.json({"response":"ok"})
})

server.listen(process.env.PORT, function(){
    
    console.log('server is runnig')
}) 