
function klocals() {
    this.seoul      = 0;
    this.busan      = 0;
    this.daegu      = 0;
    this.incheon    = 0;
    this.gwangju    = 0;
    this.daejeon    = 0;
    this.ulsan      = 0;
    this.gyeonggi   = 0;
    this.gangwon    = 0;
    this.chungbuk   = 0;
    this.chungnam   = 0;
    this.jeonbuk    = 0;
    this.jeonnam    = 0;
    this.gyeongbuk  = 0;
    this.gyeongnam  = 0;
    this.jeju       = 0;
    this.sejong     = 0;
}

function kcity() {
    this.date = null;
    this.name = null;
    this.pm10 = null;
    this.pm25 = null;
}

module.exports.createKlocals = function () {
    return new klocals();
}

module.exports.createKcity = function () {
    return new kcity();
}