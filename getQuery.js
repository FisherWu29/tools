function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
/**
 * 查询URL参数
 * @param name
 * @param [url]
 * @returns {}
 */
function getQueryString (name, url) {
    var reg = new RegExp('[&,?]' + name + '=([^\\&]*)', 'i');
    var value = reg.exec(url || location.search);
    return value ? value[1] : '';
}

/**
 * 获取URL参数对象
 * @param queryString
 * @returns {}
 */

function getQueryMap(queryString) {
    var paramObj = {},
        paramList,
        oneQueryMatch,
        regGlobal = /[\?\&][^\?\&]+=[^\?\&#]+/g,
        regOne = /[\?\&]([^=\?]+)=([^\?\&#]+)/;

    queryString = queryString || location.href;
    paramList = queryString.match(regGlobal);

    if (!paramList) {
        return paramObj;
    }

    for (var i = 0, len = paramList.length; i < len; i++) {
        oneQueryMatch = paramList[i].match(regOne);
        if (null === oneQueryMatch) {
            continue;
        }
        paramObj[oneQueryMatch[1]] = oneQueryMatch[2];
    }

    return paramObj;
}


var r = {
    protocol: /([^\/]+:)\/\/(.*)/i,
    host: /(^[^\:\/]+)((?:\/|:|$)?.*)/,
    port: /\:?([^\/]*)(\/?.*)/,
    pathname: /([^\?#]+)(\??[^#]*)(#?.*)/
};
/**
 * 将一个url解析成类似location的对象
 * @param url
 * @returns {{}}返回一个类似location对象
 */
function parseURL(url) {
    var tmp, res = {};
    res.href = url;
    for (var p in r) {
        tmp = r[p].exec(url);
        res[p] = tmp[1];
        url = tmp[2];
        if (url === "") {
            url = "/";
        }
        if (p === "pathname") {
            res.pathname = tmp[1];
            res.search = tmp[2];
            res.hash = tmp[3];
        }
    }
    return res;
}