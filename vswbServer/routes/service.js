var express = require('express');
var request = require('request');
var packetprocess = require('../helper/packetprocess')
var route = express.Router();

module.exports = function () {

    route.get('/rt/total', function (req, res) {

        var result = packetprocess.AllMesure(request, 'a');
        res.send(global.glocalsJson);
    });

    route.get('/rt/inner', function (req, res) {

        var result = packetprocess.InnMesure(request, 'a')
        res.send(global.gcitysJson);
    });

    return route;
}