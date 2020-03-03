var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Portal de Noticias</body></html>")
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Noticias Tecnologia</body></html>")
});

app.listen(3000, function(){
    console.log("servidor rodando com Express");
});
