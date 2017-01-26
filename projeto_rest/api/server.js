
var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty');
var objectId = require('mongodb').ObjectId;
var fs = require('fs');
var app = express();


/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multiparty());

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
					res.status(200).json(results);	
				}
				mongoclient.close();
			});
		});
	});
});

app.post('/api',function(req,res){
	//header e dominio o asterisco é para todos
	res.setHeader("Access-Control-Allow-Origin","*");

	var d = req.body;
	
	console.log(req.files);

	var date = new Date();
	var time_stamp = date.getTime();

	var url_imagem = time_stamp + '_' + req.files.arquivo.originalFilename;

	var path_origem = req.files.arquivo.path;
	var path_destino = './upload/' + url_imagem

	fs.rename(path_origem,path_destino, function (err) {
		if(err){
			res.status(500).json({error:err});
			return;
		}
	});

	var dados = {
		url_imagem: url_imagem,
		titulo: d.titulo
	}
	console.log(dados);

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


app.delete('/api/:id',function(req,res){
	connMongoDB().open(function(err,mongoclient){
		mongoclient.collection('postagens',function(err,collection){
			collection.remove(
					{ _id:objectId(req.params.id) },
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

