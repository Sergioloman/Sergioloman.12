const mysql = require('mysql2');
require('dotenv').config()

const connection =  mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password: process.env.DB_PASS,
        database:"employees_db"
    }
);


connection.connect((err)=>{if(err)throw err});

module.exports = connection;


