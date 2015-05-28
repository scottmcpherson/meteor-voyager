var request = Npm.require('request');
var cookieJar = request.jar();
var cheerio = Npm.require('cheerio');


HTTV = {};


HTTV._get = function (url) {
  var getOptions = {
    json: true,
    jar: cookieJar,
    headers: {
      'User-Agent': URER_AGENT
    },
  };
  var results = HTTP.call('GET', url, { npmRequestOptions: getOptions });
  return results;
};


HTTV.login = function (url, form) {
  var postOptions = {
    form: form,
    json: true,
    jar: cookieJar,
    headers: {
      'User-Agent': URER_AGENT
    },
  };
  var result = HTTP.call('POST', url, { npmRequestOptions: postOptions });
  return result;
};


HTTV.get = function (url) {
  var results = this._get(url)
  return cheerio.load(results.content);
};


HTTV.getJSON = function (url) {
  var results = this._get(url)
  return results;
};

