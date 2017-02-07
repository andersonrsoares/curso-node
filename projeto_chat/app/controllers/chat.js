module.exports.iniciaChat = function(application,req,res){
	var form = req.body;

	//console.log(req);

	req.assert('apelido','Nome ou apelido obrigatrio').notEmpty();
	req.assert('apelido','Nome ou apelido deve connter 3-15 caracteres').len(3,15);


	var erros = req.validationErrors();
	var e =	 {validacao : erros};
	//console.log(e);
	if(erros){	

		res.render("index",e);
		return;
	}
	//get do io passo como set no app.js
	application.get('io').emit("msgParaCliente",
		{apelido: form.apelido, mensagem: "entrou"}
	);
	res.render("chat",{form:form});

}