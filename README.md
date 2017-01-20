# curso-node
no mac ou linux usar sudo<br/> 
configurar npm <br/> 
npm init<br/> 
informar dados <br/> 
importante!<br/> 
entry point: arquivo de entrada <br/> 


nodemon<br/> 
ferramenta para recarregar os arquivos editados no servidor nodejs<br/>  
npm install -g nodemon <br/> 
execute nodemon arquivo.js para iniciar o servidor <br/> 


baixar aquitvos de dependencia <br/> 
npm install<br/> 
npm start<br/> 


pacotes<br/> 
comando --save serve para colocar os aquitvos na pasta do projeto <br/> 
npm install express --save(monulo para http) <br/> 
npm install ejs --save(modulo para gerar paginas html)<br/> 
npm install mysql --save(modulo banco de dados mysql)<br/> 
npm install consign --save(modulo para carregamento automatico de modulos )<br/> 
npm install body-parser --save(modulo para reornar o corpo da de uma request usando 
express)<br/> 
npm install connect-multiparty --save(modulo para requesicoes em multpary)<br/>
npm install mongodb --save(mmondodb driver)<br/>


MongoDb<br/>
https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-os-x/<br/>

curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.2.11.tgz(baixar arquivo)<br/>
tar -zxvf mongodb-osx-x86_64-3.2.11.tgz (extrair arquivo)<br/>

$ sudo chmod 777(permissao geral para pastas)<br/>

pwd|pbcopy(pega diretorio atual no terminal)<br/>

export PATH=<mongodb-install-directory>/bin:$PATH(caminho do mongo)<br/>

Comandos para executar o mongo

mongod(servico do mongo) --rest para subir aplicao de gereciamento pelo navegador<br/> 

mongo(aplciacao para manutencao das tabelas e banco de dados)<br/> 

se nao funcionar execute diretamente com ./mongo<br/>


show dbs(motra as databases)<br/>
use nome_banco("cria" o banco se nao existir) <br/>
db.nomedacollection.save(json)(passa o json como paramtro para criar o objeto)<br/>
db.dropDatabase() (exclui uma base de dados)<br/>
db.createCollection("nome da collection")(cria uma collection )<br/>
db.getCollectionNames()(exime as collections)<br/>
db.nomedacollection.drop()(remover uma collection)<br/>
db.nomedacollection.findOne()(mostra ultimo resgistro)<br/>
db.nomedacollection.find()(mostra todos os resgistro)<br/>
db.nomedacollection.find().pretty()(pretty identa as informacoes)<br/>


<br/>
Insert<br/>
db.nomedacollection.save(json)(passa o json como paramtro para criar o objeto)<br/>


Update<br/>
db.nomedacollection.update({parametros de atualziacao},{$set},{mult:false})<br/>



exemplo<br/>
db.alunos.update({nome:'jose'},{$set:{nome:'joao'}},{mult:false})<br/>


update via save usando o _id<br/>
db.alunos.save({_id:"xxxxxx"})<br/>

db.alunos.save({
	"_id" : ObjectId("583482d442fe10dbc4f603a4"),
	"nome" : "joao",
	"idade" : 30,
	"sexo" : "M",
	"cpf" : "111.111.111-11",
	"matricula" : "123456"
})

<br/>
Consultas<br/>

operadores de comparacao<br/>
$eq = igual<br/>
$lt = menor que<br/>
$lte = menor ou igual<br/>
$gt = maior que<br/>
$gte = maior ou igual<br/>
$ne = diferente<br/>

exemplos<br/>
db.nomedacollection.find({nome:{$eq:"jose"}})(exemplo de busca usando igual($eq))<br/>
db.nomedacollection.find({idade:{$lt:30}})(exemplo de busca usando menor que($lt))<br/>


operadores logicos<br/>
and<br/>
or<br/>
exemplos<br/>
db.nomedacollection.find({sexo:{$eq:"F"},idade:{$gt:30}})(teste com AND)<br/>

db.alunos.find(
{
	$or:[{sexo:{$eq:"F"},idade:{$gt:30}}]

}) (teste com OR)<br/>

db.alunos.find({sexo:{$eq:"F"},idade:{$gt:30}})
db.alunos.find({nome:{$eq:"jose"}})
