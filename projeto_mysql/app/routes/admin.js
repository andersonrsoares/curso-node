module.exports = function(application){
    application.get('/formulario_noticia',function(req,res){
         //res.render("admin/form_add_noticia");
         application.app.controllers.admin.formulario_noticia(application,req,res);
    });

     application.post('/noticias/salvar',function(req,res){
         application.app.controllers.admin.noticias_salvar(application,req,res);
    });
};