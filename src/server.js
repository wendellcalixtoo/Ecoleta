const express = require('express');
const server = express();

// Configurar pasta publica
server.use(express.static('public'));

// Utilizando template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

// Configurar caminhos da minha aplicação
// Página inicial
// req = Requisição = pedido
// res = Resposta
server.get('/', (req, res) => {
  return res.render('index.html', { title: 'O meu titulo dinamico' });
});

// Pagina Create-point
server.get('/create-point', (req, res) => {
  return res.render('create-point.html');
});

// Ligar o servidor
server.listen(3000);
