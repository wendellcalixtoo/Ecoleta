const express = require('express');
const server = express();

// Pegar o banco de dados
const db = require('./database/db');

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

// Pagina Search-results
server.get('/search', (req, res) => {
  // Pegar os dados do banco de dados
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log('Aqui estão seus registros');
    console.log(rows);

    const total = rows.length

    // Mostrar a pagina HTML com os dados do banco de dados
    return res.render('search-results.html', { places: rows, total: total});
  });


});

// Ligar o servidor
server.listen(3000);
