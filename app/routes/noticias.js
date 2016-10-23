//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    app.get('/noticias',function(req,res){
         var connection = app.config.dbConnection();  
        //2 paametros sql e callback do retrono
        connection.query("select * from noticias",function(error,result){
            console.log(error);
            res.render("noticias/noticias",{noticias:result});
        });
         
    });
};

 /*var mysql = require('mysql');

        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password:'root',
            database:'cursonode'
        });*/