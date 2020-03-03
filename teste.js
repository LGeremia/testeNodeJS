var http = require('http');
var server = http.createServer(function(req,res){
    var categoria = req.url;
    if(categoria == '/tecnologia'){
        res.end("<html><body> Notícias Tecnologia</body></html>")
    }else if(categoria == '/Moda'){
        res.end("<html><body> Notícias Moda</body></html>")
    }else if(categoria == '/Teste'){
        res.end("<html><body> Notícias Teste</body></html>")
    }else{
        res.end("<html><body> Portal de Notícias</body></html>")
    }
});
server.listen(3000);