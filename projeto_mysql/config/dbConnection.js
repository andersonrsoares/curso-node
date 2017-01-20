var mysql = require('mysql');

var connMySQL = function(){
     var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password:'root',
        database:'cursonode'
    });
    return connection;
}

module.exports = function(){
    return connMySQL;
};


