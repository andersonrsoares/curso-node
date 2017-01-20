function NoticiasDAO(connection) {
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
      //2 paametros sql e callback do retrono
    this._connection.query("select * from noticias",callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
      //2 paametros sql e callback do retrono
     this._connection.query("select * from noticias where id_noticia = 2",callback);
};

NoticiasDAO.prototype.salvarNoticia = function(connection,callback){
      //consegue passar um json so set para incluir na tabela
     this._connection.query("insert into noticias set ? ",noticia,callback);
 };

module.exports = function(){
    return NoticiasDAO;
};