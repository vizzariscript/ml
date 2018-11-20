
var request = require('request-promise');
var apiConfig = require('./api-config.js');
var apiOptions = apiConfig.getApiOptions();

var classLista = require('./lista.js');

module.exports = {

  getBySearch: function (search) {

    apiOptions.uri = apiConfig.getUrlSearch() + search;
    return request(apiOptions)
      .then(function (response) {
        var lista = classLista.newLista();
        lista._results = response.results.splice(4);
        return lista;
      })
      .catch(function (err) { return err; });
  },

  getById: function (ml_id) {

    apiOptions.uri = apiConfig.getUrlItemById() + ml_id;
    return request(apiOptions)
      .then(function (response) {
        return response;
      })
      .catch(function (err) { return err; });
  }

};