
var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var objectId = require('mongodb').ObjectId;

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
	var server = new mongodb.Server(
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

//get by id
app.get('/api/:id',function(req,res){
	connMongoDB().open(function(err,mongoclient){
		mongoclient.collection('postagens',function(err,collection){
			collection.find(objectId(req.params.id)).toArray(function(err,results){
				if(err){
					res.json(err);	
				}else{
					res.json(results);	
				}
				mongoclient.close();
			});
		});
	});
});

app.get('/api',function(req,res){
	connMongoDB().open(function(err,mongoclient){
		mongoclient.collection('postagens',function(err,collection){
			collection.find().toArray(function(err,results){
				if(err){
					res.json(err);	
				}else{
					res.json(results);	
				}
				mongoclient.close();
			});
		});
	});
});

app.post('/api',function(req,res){
	var dados = req.body;
	//res.send(dados);
	connMongoDB().open(function(err,mongoclient){
		mongoclient.collection('postagens',function(err,collection){
			collection.insert(dados,function(err,records){
				if(err){
					res.json(err);	
				}else{
					res.json(records);	
				}
				mongoclient.close();
			});
		});
	});
});

app.put('/api/:id',function(req,res){
	connMongoDB().open(function(err,mongoclient){
		mongoclient.collection('postagens',function(err,collection){
			collection.update(
					{ _id:objectId(req.params.id) },
					{ $set : {titulo:req.body.titulo} },
					{},
					function(err,records){
						if(err){
							res.json(err);	
						}else{
							res.json(records);	
						}
						mongoclient.close();
					}
				);
		});
	});
});

