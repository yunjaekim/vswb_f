var packetparser = require('./packetparser');
var configparser = require('./configparser');

module.exports.AllMesure = function (request, url) {

    var url =
        configparser.GetOptionURL() + '/'
        + configparser.GetOptionFeature() + '/'
        + configparser.GetAllMesureFeature() + '?'
        + configparser.GetAllMesureParam() + '&ServiceKey='
        + configparser.GetOptionServiceKey();

    request({
        url: url,
        method: 'GET'
    }, function (error, response, body) {
        packetparser.GetRtAllMesureValue(body);
    });
}

module.exports.InnMesure = function (request, url) {

    var url =
        configparser.GetOptionURL() + '/'
        + configparser.GetOptionFeature() + '/'
        + configparser.GetInnMesureFeature() + '?'
        + configparser.GetInnMesureParam() + '&ServiceKey='
        + configparser.GetOptionServiceKey();

    request({
        url: url,
        method: 'GET'
    }, function (error, response, body) {
        packetparser.GetRtInnMesureValue(body);
    });
}