var http = require('http');
let fs= require("fs");
var productsRepo = require("./products")
var comments = require("./comments")
http.createServer(function (req, res) {

    if(url="/"){
        fs.readFile("index.html",function(error,html){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });

    }

    var _url ;
    if (req.url == "/getProducts") {

        var products = productsRepo.GetProducts(function(data){

            console.log("product legth",data);
            // console.log("get products called");
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
        
        //console.log(typeof(productsRepo.GetProducts()));
        //console.log(typeof(comments.Comments()));

      
    }
    if (_url  = /^\/getProducts\/(\d+)$/i.exec(req.url)) {
        let product =productsRepo.GetProduct(_url[1],function(data){
            console.log(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }
    if (_url  = /^\/deleteProduct\/(\d+)$/i.exec(req.url)) {
        let result =productsRepo.DeleteProduct(_url[1]);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(result);
    }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

