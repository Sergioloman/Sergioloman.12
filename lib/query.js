const connection = require("../server/connection.js")

class Queries {
    constructor(connection){
        this.connection = connection;
    };
    getAllDepts(){
        const mysql = 'SELECT * FROM departments;'
          //we need to do several joins here
        /*
        
        */
        return this.connection.promise()
            .query(mysql)       
    };
    getAllRoles(){
        const mysql = 'SELECT * FROM roles;'
          //we need to do several joins here
        /*
        
        */
        return this.connection.promise()
            .query(mysql)
    };
    getAllEmployees(){
        const mysql = 'SELECT * FROM employees;'
        //we need to do several joins here
        /*

        */
        return this.connection.promise()
            .query(mysql)
    };
    addDept(department){
        const mysql = "INSERT INTO departments (name) VALUES (?)";
        return this.connection.promise().query(mysql, department);        
    };
    addRole(role){
        const mysql = "INSERT INTO roles (title, salary, department_id) VALUES ( ?, ?, ? )"; 
        return this.connection.promise().query(mysql, role); 
    };
    addEnployee(employee){
        const mysql = 'INSERT INTO employees (first_name, last_name, role_id) VALUES ( ?, ?, ? )';
        return this.connection.promise()
            .query(mysql, employee)
    };
    updateRole(employee){
        const mysql ='UPDATE query'
        return this.connection.promise()
            .query(mysql, /*  Logic to update database   */)
    };
}

const query = new Queries(connection);
module.exports = query;


