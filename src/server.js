const express = require('express');
const server = express();

// Configurar pasta publica
server.use(express.static('public'));

// Configurar caminhos da minha aplicação
// Página inicial
// req = Requisição = pedido
// res = Resposta
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Pagina Create-point
server.get('/create-point', (req, res) => {
  res.sendFile(__dirname + '/views/create-point.html');
});

// Ligar o servidor
server.listen(3000);
