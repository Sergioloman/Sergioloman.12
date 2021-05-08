const connection = require("../server/connection.js")

class Queries {
    constructor(connection){
        this.connection = connection;
    }

    getAlldepts(){
        return this.connection.promise().query(
            //define query
            'SELECT * FROM department;'
        );
    }
    addDept(department){
        return this.connection.promoise().query(
            'INSERT INTO department SET ?', department
        )
    }
}


const query = new Queries(connection);
// console.log(query);
module.exports = query;


