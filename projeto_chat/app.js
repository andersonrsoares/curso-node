/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(3000, function(){
	console.log('Servidor online');
})

var io = require('socket.io').listen(server);

//variavel do express
app.set('io',io);

/* criar conexao por websocket*/
io.on('connection', function (socket) {
 	console.log('usuario conectou');

 	socket.on('disconnect',function (argument) {
 		 	console.log('usuario desconectou');
 	});

	socket.on('msgParaServidor',function (data) {
 		 socket.emit("msgParaCliente",
 		 	{apelido:data.apelido,mensagem:data.mensagem});

 		 socket.broadcast.emit("msgParaCliente",
 		 	{apelido:data.apelido,mensagem:data.mensagem});
 	});


 	//emit faz um pedido para executar
 	//on ouve pedidos
});