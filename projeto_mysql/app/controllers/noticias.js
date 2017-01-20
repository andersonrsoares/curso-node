module.exports.noticias = function(application,req,res){

	 var connection = application.config.dbConnection();  
     var noticiasDAO = new application.app.models.NoticiasDAO(connection);
    
     noticiasDAO.getNoticias(function(error,result){
        console.log(error);
        res.render("noticias/noticias",{noticias:result});
     });
}
