var express = require('express');
var route = express.Router();

module.exports = function (passport) {

    route.get('/', function (req, res) {
        res.send('home');
    });

    route.get('/home', function (req, res) {
        res.send('home');
    })

    return route;


}