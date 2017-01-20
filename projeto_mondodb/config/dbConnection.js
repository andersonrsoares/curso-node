/* importar o módulo do mondodb */
var mongo = require('mongodb');


var connMongoDB = function() {
	console.log('entrou na funcao de conexao')

	//tres parametros para configuracao do servidor
	var server = new mongo.Server(
		'localhost',//1-endereco
		27017,//2-porta de conexao
		{}//3-opcoes de do servidor
	);

	//tres parametros para coneccao
	

	var db = new mongo.Db(
		'got',//1 - nome do mando de dados
		server,	//2- objeto de conecao com servidor
		{}//3-objeto de configuracoes adcionais
	);

	return db;
}

module.exports = function() {
	return connMongoDB;

};