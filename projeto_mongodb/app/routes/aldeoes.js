module.exports = function(application){
	application.get('/aldeoes', function(req, res){
		res.render('aldeoes');
	});
}