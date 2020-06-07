// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose();

// iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db

// Utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {
//   // Com comando SQL nos vamos:
//   // 1 - Criar uma tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     )
//   `);
//   // 2 - Inserir dados na tabela
//   const query = `
//   INSERT INTO places (
//       image,
//       name,
//       address,
//       address2,
//       state,
//       city,
//       items
//   ) VALUES (?,?,?,?,?,?,?);
// `;
//   const values = [
//     'https://greentumble.com/wp-content/uploads/2015/10/paper-recycling.jpg',
//     'Paperside',
//     'Guilherme Gemballa, Jardim América',
//     'Número 260',
//     'Santa Catarina',
//     'Rio do Sul',
//     'Papéis e Papelão'
//   ];
//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('Cadastrado com sucesso');
//     console.log(this);
//   }
//     db.run(query, values, afterInsertData);

//   // 3 - Consultar os dados da tabela
// //   db.all(`SELECT * FROM places`, function (err, rows) {
// //     if (err) {
// //       return console.log(err);
// //     }
// //     console.log('Aqui estão seus registros');
// //     console.log(rows);
// //   });

//   4 - Deletar um dado da tabela
  db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
      if(err){
          return console.log(err)
      }

      console.log("Registro deletado com sucesso!")
  })
// });
