var app = require('./config/app_express')();
var passport = require('./config/passport')(app);

var main = require('./routes/main')(passport);
var service = require('./routes/service')();

app.use('/', main);
app.use('/api', service);

app.listen(5000, function () {
    console.log('Server On. Port:5000');
});

module.exports = app;