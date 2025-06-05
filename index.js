const http = require("http");
const fs = require("fs");
const PORT = 5000;

const config = (req, res) => {
  
  res.statusCode = 200;
  
  res.setHeader("Content-Type", "text/plain"); 

  res.end("buendia");
};

//Server
const server = http.createServer(config);

// listener

server.listen(PORT, () => {
  console.log(`Servidor corriendo el puerto ${PORT}`);
});