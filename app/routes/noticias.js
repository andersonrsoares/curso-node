//var dbConnection = require('../../config/dbConnection');

module.exports = function(application){

    application.get('/noticias',function(req,res){
        application.app.controllers.noticias.noticias(application,req,res);
        //  var connection = application.config.dbConnection();  
        //  var noticiasDAO = new application.app.models.NoticiasDAO(connection);
        
        //  noticiasDAO.getNoticias(function(error,result){
        //     console.log(error);
        //     res.render("noticias/noticias",{noticias:result});
        // });
         
    });
};

 /*
        //2 paametros sql e callback do retrono
        connection.query("select * from noticias",function(error,result){
            console.log(error);
            res.render("noticias/noticias",{noticias:result});
        });

         var mysql = require('mysql');

        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password:'root',
            database:'cursonode'
        });*/