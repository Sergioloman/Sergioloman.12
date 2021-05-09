const connection = require("../server/connection.js")

class Queries {
    constructor(connection){
        this.connection = connection;
    };

    getAllDepts(){
        const mysql = 'SELECT * FROM departments;'
        return this.connection.promise()
            .query(mysql)       
    };

    addDept(department){
        const mysql = 'INSERT INTO departments SET ?'
        return this.connection.promise()
            .query(mysql, department)
    };
    getAllRoles(){
        const mysql = 'SELECT * FROM roles;'
        return this.connection.promise()
            .query(mysql)
    };
    addRole(role){
        const mysql =  'INSERT INTO roles SET ?' 
        return this.connection.promise()
            .query(mysql, role) 
    };
    getAllEmployees(){
        const mysql = 'SELECT * FROM employees;'
        return this.connection.promise()
            .query(mysql)
    }
    addEnployee(employee){
        const mysql = 'INSERT INTO employees SET ?'
        return this.connection.promise()
            .query(mysql, employee)
    };
    updateRole(  /*    */ ){
        const mysql =''
        return this.connection.promise()
            .query(mysql, /*     */)
    }
}


const query = new Queries(connection);
// console.log(query);
module.exports = query;


