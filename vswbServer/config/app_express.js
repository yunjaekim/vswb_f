var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.locals.pretty = true;

    // view engine init
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(bodyParser.urlencoded({ extended: false }));

    return app;
}