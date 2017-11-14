﻿/* global chrome */
var blockUrls = [
    "*://pc.ctsywy.com/js/*",
    "*://p2.hyz86.com/*",
    "*://v.hr41.cn/showpage*",
    "*://js.bkjia.com/bkjia/js/head_top.js",
    "*://js.bkjia.com/bkjia/js/artitle.js",
    "*://js.bkjia.com/bkjia/js/right_ad6.js",
    "*://js.bkjia.com/bkjia/js/left_foot_ad.js",
    "*://js.bkjia.com/bkjia/js/arc_foot_ad.js",
    "*://news.66san.com/*",
    "*://rjs.niuxgame77.com/*",
    "http://hxjs.tool.hexun.com/homeway/pageMediaControl_1.js",
    "http://hxjs.tool.hexun.com/news/pageMediaControl1.js",
    "*://pos.baidu.com/*",
    "*://cpro.baidustatic.com/*",
    "*://cpro.baidustatic.com/*",
    "*://cb.baidu.com/*",
    "*://cbjs.baidu.com/*",
    "*://pagead2.googlesyndication.com/*",
    "*://googleads.g.doubleclick.net/*",
    "*://tpc.googlesyndication.com/*",
    "*://s.lianmeng.360.cn/*",
    "*://sax.sina.com.cn/*",
    "*://www.ltaaa.com/Cache/Ads/*",
    "*://p.tanx.com/*",
    "*://static-ssl.mediav.com/*",
    "*adsense*",
    "http://y2.ifengimg.com/*yingguang*.js",
    "http://e.e708.net/*",
    "http://api.ad.cnblogs.com/*",
    "http://static.iaskgo.com/*/js/page/googlebaidu.min.js",
    "http://s.ajuhd.com/*.php*",
    "http://j.santaihu.com/bid/*",
    "http://images-fe.ssl-images-amazon.com/*",
    "http://www.google-analytics.com/ga.js",
    "https://ssl.google-analytics.com/ga.js",
    "*://*.gstatic.com/*",
    "*://www.google.com/*",
    "*://*.51.la/*",
    "*://connect.facebook.net/*",
    "*://platform.twitter.com/*",
    "*://ykun.ga25.com:8012/*",
    "*://inte.sogou.com/*",
    "*://cse.google.com/*",
    "*://js.adsrvr.org/*",
    "http://common.jb51.net/js/jbLoader.js",
    "*://ad-api.cnblogs.com/*",
    "*://phs.tanx.com/ex*",
    "*://qzapp.qlogo.cn/*",
    "*://ccr.yxdown.com/open/*",
    "*://cpc.88rpg.net/*",
    "*://follow.v.t.qq.com/*",
    "*://ads.yxdown.com/*",
    "*://ja.gamersky.com/banner/new_page_allsite_620.js",
    "*://ja.gamersky.com/background/back_news1000.js",
    // "*://ja.gamersky.com/www/a300_3.htm",
    // "*://ja.gamersky.com/www/a300_2.htm",
    "*://ja.gamersky.com/banner/new_top_allsite_970_2.js",
    "*://static.mediav.com/*",
    "*://g.gjc3hsm.com/*"
];
//http://cpro.baidustatic.com/cpro/ui/c.js
//http://g.gjc3hsm.com/b/1/683/11397/jfd9ki.swf?uid=507969
//http://g.gjc3hsm.com/b/1/1050/gdd9fid.swf?uid=507970
//http://static.mediav.com/js/mvf_g2.js
//http://pagead2.googlesyndication.com/pagead/js/r20170410/r20170110/show_ads_impl.js
//http://ja.gamersky.com/www/a300_2.htm
//http://ja.gamersky.com/banner/new_top_allsite_970_2.js
//http://ja.gamersky.com/www/a300_3.htm
//http://ja.gamersky.com/background/back_news1000.js
//http://ccr.yxdown.com/open/tl_ad.js
//http://cpc.88rpg.net/js/c/17988_3731.js
//http://follow.v.t.qq.com/index.php?c=follow&a=index&appkey=801242675&bg=FBFDFF&hsize=50&name=yxdown_dandan,yingtaojun323
//http://ads.yxdown.com/ad.ashx/news_redianzixun.js
//http://ja.gamersky.com/banner/new_page_allsite_620.js
var logUrls = [
    "*.js"
];
var filterAllURL = {
    urls: [
        "*://*/*"
    ]
};
//onBeforeRedirect
//onBeforeSendHeaders
//onHeadersReceived
//onSendHeaders
//OnAuthRequiredOptions
//OnBeforeRedirectOptions
//OnBeforeRequestOptions
//OnBeforeSendHeadersOptions
//OnCompletedOptions
//OnHeadersReceivedOptions
//OnResponseStartedOptions
//OnSendHeadersOptions
chrome.webRequest.onAuthRequired.addListener(
    function(args) {
        logEnter("onAuthRequired");
        logExit("onAuthRequired");
    },
    filterAllURL
);
chrome.webRequest.onBeforeRedirect.addListener(
    function(args) {
        logEnter("onBeforeRedirect");
        logExit("onBeforeRedirect");
    },
    filterAllURL
);
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(args) {
        logEnter("onBeforeSendHeaders");
        logExit("onBeforeSendHeaders");
    },
    filterAllURL
);
chrome.webRequest.onHeadersReceived.addListener(
    function(args) {
        logEnter("onHeadersReceived");
        logExit("onHeadersReceived");
    },
    filterAllURL
);
chrome.webRequest.onSendHeaders.addListener(
    function(args) {
        logEnter("onSendHeaders");
        logExit("onSendHeaders");
    },
    filterAllURL
);

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        //var url = details.url;
        //console.log(url);
        ////通过匹配测试一个请求
        //if (url.indexOf("min-player") != -1) {
        //    return { redirectUrl: "http://www.baidu.com" }; //我试了本机服务器下的一个文件。
        //    //1. 记得要返回rediretUrl. 之前我用url,是无效的。     
        //}
        //return true;
        //alert("details");
        var url = details.url;
        for (var i in logUrls) {
            if (wildcard(logUrls[i], url)) {
                printVar(details);
                break;
            }
        }
        if (url.indexOf("/ads") != -1
            || url.indexOf("/adCore") != -1
            || url.indexOf("pos.baidu.com") != -1
            || url.indexOf("cpro.baidustatic.com") != -1
            || url.indexOf("cbjs.baidu.com") != -1
            || url.indexOf("cb.baidu.com") != -1
            || url.indexOf("tpc.googlesyndication.com") != -1
            || url.indexOf("pagead2.googlesyndication.com") != -1
            || url.indexOf("googleads.g.doubleclick.net") != -1
            || url.indexOf("s.lianmeng.360.cn") != -1
            || url.indexOf("sax.sina.com.cn") != -1
//            || url.indexOf("twitter.com/") != -1
            || url.indexOf("s3-ap-northeast-1.amazonaws.com") != -1
            || url.indexOf("p.tanx.com") != -1) {
            return { cancel: true };
        } /* else if (url.indexOf("jquery-migrate-1.2.1.min.js") != -1
            || url.indexOf("jquery-1.9.1.min.js") != -1) {
            return {redirectUrl: "https://lib.sinaapp.com/js/jquery/1.8.2/jquery.min.js"};
        } */ else {
            for (var k in blockUrls) {
                if (wildcard(blockUrls[k], url)) {
                    return { cancel: true };
                }
            }
        }
        if (details.redirectUrl != "" && details.redirectUrl != undefined && details.redirectUrl != null) {
            alert(details.redirectUrl);
            return { cancel: true };
        }
        return {};
    },
    filterAllURL,  //监听所有的url,你也可以通过*来匹配。
    ["blocking"]
);
chrome.webRequest.onErrorOccurred.addListener(
    function (details) {
        logEnter("onErrorOccurred");
        var url = details.url;
        for (var i in logUrls) {
            if (wildcard(logUrls[i], url)) {
                logEnter(onErrorOccurred);
                printVar(details);
                break;
            }
        }
        logExit("onErrorOccurred");
        return {};
    },
    filterAllURL
);
chrome.webRequest.onCompleted.addListener(
    function (details) {
        logEnter("onCompleted");
        var url = details.url;
        for (var i in logUrls) {
            if (wildcard(logUrls[i], url)) {
                printVar(details);
                break;
            }
        }
        logExit("onCompleted");
        return {};
    },
    filterAllURL,  //监听所有的url,你也可以通过*来匹配。
    ["responseHeaders"]
);
chrome.webRequest.onResponseStarted.addListener(
    function (details) {
        logEnter("onResponseStarted");
        var url = details.url;
        for (var i in logUrls) {
            if (wildcard(logUrls[i], url)) {
                printVar(details);
                break;
            }
        }
        logExit("onResponseStarted");
        return {};
    },
    filterAllURL,  //监听所有的url,你也可以通过*来匹配。
    ["responseHeaders"]
);
/* in background.html */
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null,
        {
            code: "document.body.bgColor='red'"
        });
});
//var wR = chrome.webRequest || chrome.experimental.webRequest;
////兼容17之前版本的chrome，若需要使用chrome.experimental，需要在 about:flags 中“启用“实验用。。API”
//if (wR) {
//    wR.onBeforeSendHeaders.addListener(
//        function (details) {
//            //if (details.type === 'xmlhttprequest') {
//            //    var exists = false;
//            //    for (var i = 0; i < details.requestHeaders.length; ++i) {
//            //        if (details.requestHeaders[i].name === 'Referer') {
//            //            exists = true;

//            //            break;
//            //        }
//            //    }
//            //    if (!exists) {//不存在 Referer 就添加
//            //        details.requestHeaders.push({ name: 'Referer', value: 'http://www.yourname.com' });
//            //    }
//            //    return { requestHeaders: details.requestHeaders };
//            //}
//            return { cancel: true };
//        },
//        { urls: ["https://*.google.com/*", "http://*.google.com/*"] },//匹配访问的目标url
//        ["blocking", "requestHeaders"]
//    );
//}