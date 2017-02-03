module.exports.iniciaChat = function(application,req,res){
	var form = req.body;

	//console.log(req);

	req.assert('apelido','Nome ou apelido obrigatrio').notEmpty();
	req.assert('apelido','Nome ou apelido deve connter 3-15 caracteres').len(3,15);


	var erros = req.validationErrors();
	console.log(erros);

	if(erros){	
		res.render("index",{validacao:erros});
		return;
	}
	
	res.render("chat");

}