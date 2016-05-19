var querystring = require('querystring');
/*
* 邮箱验证*/
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export function getUrlWithParam(url, param) {
	var stringParam = querystring.stringify(param);
	return url + stringParam;
}
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

function del_business_store_local_data(businessID, storeID) {
	var storage = window.localStorage;
	for (var i=0, len = storage.length; i < len; i++) {
		let key = storage.key(i);
		if(key.indexOf(businessID) && key.indexOf(storeID)){
			storage.removeItem(key);
		}
	}
}

function getUrlWithParam(url, param) {
	var stringParam = querystring.stringify(param);
	return url + stringParam;
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		var error = new Error(response.statusText);
		error.response = response;
		throw error
	}
}

function parseJSON(response) {
	return response.json()
}

function setCookie(name,value,exp){
    var startTime=new Date()
    startTime.setTime(startTime.getTime()+exp)
    document.cookie=name+ "=" +escape(value)+
    ((exp==null) ? "" : ";expires="+startTime.toGMTString())
}

function getCookie(name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(name + "=")
        if (c_start!=-1){
            c_start=c_start + name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1){
                c_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}

function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime()-1);
    var cval = getCookie(name);
    if(cval!=null){
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

/**
 * 时间戳转换
 * @param time1
 * @param time2
 * @returns {number}
 */
function timestampTran(time1,time2){
    var date1 = new Date(Number(time1));
    var date2 = new Date(Number(time2));
    var newDate = new Date();
    newDate.setFullYear(date1.getFullYear());
    newDate.setMonth(date1.getMonth());
    newDate.setDate(date1.getDate());
    newDate.setHours(date2.getHours());
    newDate.setMinutes(date2.getMinutes());
    return newDate.getTime();
}