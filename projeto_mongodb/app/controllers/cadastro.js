module.exports.cadastro = function(application,req, res){
	res.render('cadastro',{validacao:{},dadosForm:{}});
}

module.exports.cadastrar = function(application,req, res){
	var dadosForm = req.body;
	req.assert('nome','Nome nao pode ser vazio').notEmpty();
	req.assert('usuario','Usuario nao pode ser vazio').notEmpty();
	req.assert('senha','Senha nao pode ser vazio').notEmpty();
	req.assert('casa','Casa nao pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro',{validacao:erros,dadosForm:dadosForm});
		return;
	}	

	var connection = application.config.dbConnection;
	console.log(connection);

	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	UsuariosDAO.inserirUsuario(dadosForm);

	res.send('tudo certo');
}


module.exports.teste = function(application,req, res){
	var connection = application.config.dbConnection;
	console.log(connection);

	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	UsuariosDAO.consultarUsuario(function (err,result) {
		if(err==null){
			res.send(result);
		}else{
			res.send(err);
		}
		
	});

}

		
