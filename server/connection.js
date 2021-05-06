const mysql = require('mysql2');
//

const connection =  mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"zero1010",
        database:"library"
    }
);

connection.connect((err)=>{if(err)throw err});

module.exports = connection;


