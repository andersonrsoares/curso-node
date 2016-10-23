var app = require('./config/server');

var rotahome= require('./app/routes/home')(app);
var rotanoticias = require('./app/routes/noticias')(app);
var rotaformulario = require('./app/routes/formulario_noticia')(app);

//msg retorna uma funcao
var msg = require('./mod_test');

app.get('/tecnologia',function(req,res){
    res.render("secao/tecnologia");
});

app.get('/moda',function(req,res){
    res.send("<html><body>pagina retona html tezxto</html></body>");
});

app.listen(3000,function(){
    console.log("servido rodando com express");
    console.log(msg());
});