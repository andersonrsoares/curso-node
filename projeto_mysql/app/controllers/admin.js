module.exports.formulario_noticia = function(application,req,res){
 	res.render("admin/form_add_noticia");
}


module.exports.noticias_salvar = function(application,req,res){
	var noticias = req.body;
     res.send(noticias);
}