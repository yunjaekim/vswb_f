var xml2js = require('xml2js');
var parser = new xml2js.Parser();

function ParseToString(content) {

    var bodyjson, bodyparser = 'None';

    parser.parseString(content, function (err, result) {
        bodyparser = JSON.stringify(result);
        bodyjson = JSON.parse(bodyparser);
    });

    return bodyjson;
}

module.exports.GetRtAllMesureValue = function (xxmlContent) {

    var mesure = require('../models/api/mesure');

    var dataContent = mesure.createKlocals();
    var jsonContent = ParseToString(xxmlContent);

    dataContent.seoul       = jsonContent.response.body[0].items[0].item[0].seoul;
    dataContent.busan       = jsonContent.response.body[0].items[0].item[0].busan;
    dataContent.daegu       = jsonContent.response.body[0].items[0].item[0].daegu;
    dataContent.incheon     = jsonContent.response.body[0].items[0].item[0].incheon;
    dataContent.gwangju     = jsonContent.response.body[0].items[0].item[0].gwangju;
    dataContent.daejeon     = jsonContent.response.body[0].items[0].item[0].daejeon;
    dataContent.ulsan       = jsonContent.response.body[0].items[0].item[0].ulsan;
    dataContent.gyeonggi    = jsonContent.response.body[0].items[0].item[0].gyeonggi;
    dataContent.gangwon     = jsonContent.response.body[0].items[0].item[0].gangwon;
    dataContent.chungbuk    = jsonContent.response.body[0].items[0].item[0].chungbuk;
    dataContent.chungnam    = jsonContent.response.body[0].items[0].item[0].chungnam;
    dataContent.jeonbuk     = jsonContent.response.body[0].items[0].item[0].jeonbuk;
    dataContent.jeonnam     = jsonContent.response.body[0].items[0].item[0].jeonnam;
    dataContent.gyeongbuk   = jsonContent.response.body[0].items[0].item[0].gyeongbuk;
    dataContent.gyeongnam   = jsonContent.response.body[0].items[0].item[0].gyeongnam;
    dataContent.jeju        = jsonContent.response.body[0].items[0].item[0].jeju;
    dataContent.sejong      = jsonContent.response.body[0].items[0].item[0].sejong;

    global.glocalsData = dataContent;
    global.glocalsJson = jsonContent;
    global.glocalsXxml = xxmlContent;
}

module.exports.GetRtInnMesureValue = function (xxmlContent) {

    var mesure = require('../models/api/mesure');

    var dataContent = mesure.createKcity();
    var jsonContent = ParseToString(xxmlContent);

    global.gcitysData = dataContent;
    global.gcitysJson = jsonContent;
    global.gcitysXxml = xxmlContent;
}



