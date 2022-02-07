app.factory('marvel', ['$http', 'config', function($http, config) {

  var _search = function (search = null) {
    var url = config.baseUrl + "characters";

    if (!search) {
      return $http
        .get(config.baseUrl + "characters?apikey=" + config.apikey)
        .success(function (data) {
          return data;
        })
        .error(function (err) {
          return err;
        });
    }

    return $http
      .get(url, {
        params: {
          nameStartsWith: search,
          limit: 24,
          apikey: config.apikey,
        },
      })
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  };

  var _getId = function (id) {
    var url = config.baseUrl + "characters/"+id+"?apikey="+config.apikey;

    return $http
      .get(url)
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  };

  return {
    search: _search,
    getId: _getId
  };
}]); 