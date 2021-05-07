const connection = require("../server/connection.js")

class Queries {
    constructor(connection){
        this.connection = connection;
    }

    getAlldepts(){
        return this.connection.query(
            //define query
            'SELECT * FROM department;'
        );
    }
    addDept(department){
        return this.connection.query(
            'INSERT INTO department SET ?', department
        )
    }
}


const query = new Queries(connection);
// console.log(query);
module.exports = query;


