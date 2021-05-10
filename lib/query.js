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
        const mysql = "INSERT INTO departments (name) VALUES (?)";
        //console.log(department);
        return this.connection.promise().query(mysql, department);
            
    };
    getAllRoles(){
        const mysql = 'SELECT * FROM roles;'
        return this.connection.promise()
            .query(mysql)
    };
    addRole(role){
        const mysql = "INSERT INTO roles (title, salary, department_id) VALUES ( ?, ?, ? )"; 
        return this.connection.promise().query(mysql, role); 
    };
    getAllEmployees(){
        const mysql = 'SELECT * FROM employees;'
        return this.connection.promise()
            .query(mysql)
    }
    addEnployee(employee){
        const mysql = 'INSERT INTO employees (first_name, last_name, role_id) VALUES ( ?, ?, ? )';
        return this.connection.promise()
            .query(mysql, employee)
    };
    updateRole(  /*    */ ){
        const mysql =''
        return this.connection.promise()
            .query(mysql, /*     */)
    }
}


//const query = 
// console.log(query);
module.exports = new Queries(connection);//query;


