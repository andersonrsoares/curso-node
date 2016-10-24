module.exports = function(){

    this.getNoticias = function(connection,callback){
          //2 paametros sql e callback do retrono
        connection.query("select * from noticias",callback);
    };
    return this;
};