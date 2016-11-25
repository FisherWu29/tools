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