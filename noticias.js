// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (req, res) {
    var categoria = req.url;
    console.log(categoria);
    if(categoria=='/tecnologia')    
        res.end("<html><body>pagina tecnologia</html></body>");
    else
    if(categoria=='/moda')     
      res.end("<html><body>pagina moda</html></body>");
     else
       res.end("<html><body>pagina padrao</html></body>"); 
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000);

// Put a friendly message on the terminal
//console.log("Server running at http://127.0.0.1:3000/");
//cd Documents/node/curso-node