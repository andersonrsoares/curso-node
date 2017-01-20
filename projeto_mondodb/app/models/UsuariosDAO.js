function UsuarioDAO(connection) {
	this._connection = connection();
};


UsuarioDAO.prototype.inserirUsuario = function(usuario) {
	this._connection.open(function(erropen, mongoclient) {
	

		if(erropen!=null){
			console.log("error");
			console.log(erropen);
			return;
		}
		
		//funcao colection manipula documeetos do mongo 
		//2 parametros 
		//1-nome da collection
		//2-callback
		mongoclient.collection(
			"usuarios", 
			function(errcollenction,collection) {

				if(erropen!=null){
					console.log("error");
					console.log(errcollenction);
					mongoclient.close();
					return;
				}
					

				collection.insert(usuario);	
				mongoclient.close();
			}
		);

	});
};

UsuarioDAO.prototype.consultarUsuario = function(callback) {
	this._connection.open(function(erropen, mongoclient) {
	

		if(erropen!=null){
			console.log("error");
			console.log(erropen);
			return;
		}
		
		//funcao colection manipula documeetos do mongo 
		//2 parametros 
		//1-nome da collection
		//2-callback
		mongoclient.collection(
			"usuarios", 
			function(errcollenction,collection) {

				if(erropen!=null){
					console.log("error");
					console.log(errcollenction);
					mongoclient.close();
					return;
				}
					

				collection.find().toArray(function (err, result) {
				      if (err) {
				      	callback(err,null);
				        console.log(err);
				      } 
				      else 
				      if (result.length) {
				      	callback(null,{data:result});
				        console.log('Found:', result);
				      } else {
				        console.log('No document(s) found with defined "find" criteria!');
				        callback(null,null);
				      }
				      //Close connection
				      mongoclient.close();
				});
			
			}
		);

	});
};

module.exports = function() {
	return UsuarioDAO;
};