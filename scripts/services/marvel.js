app.factory('marvel', ['$http', 'config', function($http, config) {

  var timestamp = Date.now();
  var hash = md5(timestamp + config.privateKey + config.publicKey);

  var _search = function (search = null) {
    var url = config.baseUrl + "characters";
    
    if (!search) {
      return $http
        .get(
          config.baseUrl +
            "characters?ts=" +
            timestamp +
            "&apikey=" +
            config.publicKey +
            "&hash=" +
            hash,
        )
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
          ts: timestamp,
          apikey: config.publicKey,
          hash: hash,
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
    var url = config.baseUrl + "characters/" + id + "?ts=" + timestamp + "&apikey=" + config.publicKey + "&hash=" + hash;

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