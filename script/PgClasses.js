var http = require("http")

var callback =  async function(request, response){
    try{
        let buscar = await fetch("https://www.dnd5eapi.co/api/2014/classes/")
        let arq = await buscar.json()
    
        response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    
        let strArq = JSON.stringify(arq.results[0])
    
        response.end(strArq)

    }catch(error){
        response.writeHead(500, {"Content-Type":"text/plain"})
        response.end("Erro ao buscar Magias")
    }

}

let server = http.createServer(callback)
server.listen(3030)
console.log("Servidor iniciado em http://localhost:3030/")