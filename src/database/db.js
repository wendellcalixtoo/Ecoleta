// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose();

// iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

// Utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
  // Com comando SQL nos vamos:
  // 1 - Criar uma tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT 
    )
  `);
  // 2 - Inserir dados na tabela
  const query = `
  INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
  ) VALUES (?,?,?,?,?,?,?);
`;
  const values = [
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1174&q=80',
    'Colectoria',
    'Guilherme Gemballa, Jardim América',
    'Número 260',
    'Santa Catarina',
    'Rio do Sul',
    'Resíduos Eletrônicos, Lâmpadas'
  ];
  function afterInsertData(err){
    if(err){
        return console.log(err)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)
  }
  db.run(query, values, afterInsertData);

  // 3 - Consultar os dados da tabela
  // 4 - Deletar um dado da tabela
});
