var express = require("express"); 
var endpoints = express();

var mercadoLibre = require("./mercadolibre.service.js");

endpoints.get('/items', function(req, res) {
  var search = req.query.search;
  // console.log(search);
  mercadoLibre.getBySearch(search).then(function (response) {
    res.send(response);
  });
  
});
 
endpoints.get('/items/:ml_id', function(req, res) {
  var ml_id = req.params.ml_id;
  mercadoLibre.getById(ml_id).then(function (response) {
    res.send(response);
  });
});
  
var server = endpoints.listen(8080, function () {
    console.log('listo....'); 
});