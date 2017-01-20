
var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

var app = express();


/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 3000;

app.listen(port);

console.log('servidor na porta ' + port);


var connMongoDB = function() {
	console.log('entrou na funcao de conexao')

	//tres parametros para configuracao do servidor
	var server = new mongo.Server(
		'localhost',//1-endereco
		27017,//2-porta de conexao
		{}//3-opcoes de do servidor
	);

	//tres parametros para coneccao
	

	var db = new mongodb.Db(
		'restexemple',//1 - nome do mando de dados
		server,	//2- objeto de conecao com servidor
		{}//3-objeto de configuracoes adcionais
	);

	return db;
}

app.get('/',function(req,res){
	res.send({msg:'ola'});
});


app.post('/api',function(req,res){
	var dados = req.body;
	res.send(dados);
});


