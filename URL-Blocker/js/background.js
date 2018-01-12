/* global chrome */
var blockUrls = [
    "*://g.fastapi.net/qa*",
    "*://g.fastapi.net/ga*",
    "*://www.cctv.com/js/cntv_Advertise.js",
    // cnzz
    "://*.cnzz.com/*",
    "://afptrack.alimama.com/",
    "://afpeng.alimama.com/",
    "http://spdeliver.i-mobile.co.jp/script/ads.js",
    "http://rjs.niuxgame77.com/r/f.php?uid=12747&pid=4261",
    "http://monitor.yigao.com/info.js",
    "http://images.sohu.com/cs/jsfile/js/c.js",
    "://pagead2.googlesyndication.com/",
    "data/ads/",
    "://cpro.baidustatic.com/",
    "://cpro.baidu.com/",
    "://cpro.baidustatic.com/",
    "://cbjs.baidu.com/",
    "://p.tanx.com/",
    "://changyan.sohu.com/",
    "://s.lianmeng.360.cn/",
    "http://dvser.china.com/s",
    "http://inte.sogou.com/ask",
    "http://rwq.youle55.com/r/",
    "http://bdimg.share.baidu.com/static/js/",
    "http://static.mediav.com/",
    "https://static-ssl.mediav.com/",
    "http://img.fd7c.com/html/click/",
    "http://www.lldm.com/style/js/main.js",

    //ltaaa.com start
    "http://61.160.200.252:9988/show.js",
    "http://61.160.200.252:9988/info.js",
    "http://www.ltaaa.com/Cache/Ads/ads_il1.js",
    "http://www.googleadsservicing.cn/",
    // ltaaa.com end

    "http://js2186.cnbole.net/c/i.php",
    "http://j.mainbx.com/wangzhai/i.php",
    "http://js2186.lishuanghao.com/cpv/i.php",
    "http://vip.koukou7.com/js/cpc_i.js",
    "http://pic.fastapi.net",
    "http://gzs20.cnzz.com",
    "http://platform.twitter.com/widgets.js",
    "http://www.google.com/cse/brand",
    "https://staticxx.facebook.com/connect/xd_arbiter/r/",
    "http://staticxx.facebook.com/connect/xd_arbiter/r/",
    "https://www.facebook.com/impression.php",
    "http://fonts.gstatic.com/s/",
    "https://apis.google.com/js/platform.js",
    "https://www.google.com/ads/",
    "https://tpc.googlesyndication.com/safeframe/",
    "https://pagead2.googlesyndication.com/pagead/",
    "https://www.gstatic.com/images/branding/googlelogo",
    "https://partner.googleadservices.com/gpt/",
    "https://securepubads.g.doubleclick.net/gampad/ads",
    "https://stats.g.doubleclick.net/",
    "https://partner.googleadservices.com/gpt/",
    "http://fonts.useso.com/css",
    "https://www.googletagservices.com/tag/js/",
    "https://www.google-analytics.com/",
    "https://googleads.g.doubleclick.net/pagead/",
    "https://connect.facebook.net/",
    "http://spdmg-backend.i-mobile.co.jp/",
    "http://spdmg.i-mobile.co.jp/",
    "http://cm.g.doubleclick.net/",
    "https://clients1.google.com",
    "*://www.40407.com/plus_rpad_fmt/*",
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
    "*://g.gjc3hsm.com/*",

    "*/ads*",
    "*/adCore*",
    "*://pos.baidu.com*",
    "*://cpro.baidustatic.com*",
    "*://cbjs.baidu.com*",
    "*://cb.baidu.com*",
    "*://tpc.googlesyndication.com*",
    "*://pagead2.googlesyndication.com*",
    "*://googleads.g.doubleclick.net*",
    "*://s.lianmeng.360.cn*",
    "*://sax.sina.com.cn*",
    "*://s3-ap-northeast-1.amazonaws.com*",
    "*://p.tanx.com*"

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
    function () {
        logEnter("onAuthRequired");
        logExit("onAuthRequired");
    },
    filterAllURL
);
chrome.webRequest.onBeforeRedirect.addListener(
    function () {
        logEnter("onBeforeRedirect");
        logExit("onBeforeRedirect");
    },
    filterAllURL
);
chrome.webRequest.onBeforeSendHeaders.addListener(
    function () {
        logEnter("onBeforeSendHeaders");
        logExit("onBeforeSendHeaders");
    },
    filterAllURL
);
chrome.webRequest.onHeadersReceived.addListener(
    function () {
        logEnter("onHeadersReceived");
        logExit("onHeadersReceived");
    },
    filterAllURL
);
chrome.webRequest.onSendHeaders.addListener(
    function () {
        logEnter("onSendHeaders");
        logExit("onSendHeaders");
    },
    filterAllURL
);

chrome.webRequest.onBeforeRequest.addListener(
    /**
     *
     * @param details.url
     * @param details.redirectUrl
     * @returns {*}
     */
    function (details) {
        if (!toggle) {
            return;
        }
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
            if (!logUrls.hasOwnProperty(i)) {
                continue;
            }
            if (wildcard(logUrls[i], url)) {
                printVar(details);
                break;
            }
        }

        for (var k in blockUrls) {
            if (!blockUrls.hasOwnProperty(k)) {
                continue;
            }
            if (wildcard(blockUrls[k], url)) {
                return {cancel: true};
            }
        }

        if (details.redirectUrl != "" && details.redirectUrl != undefined && details.redirectUrl != null) {
            alert(details.redirectUrl);
            return {cancel: true};
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
            if (!logUrls.hasOwnProperty(i)) {
                continue;
            }
            if (wildcard(logUrls[i], url)) {
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
            if (!logUrls.hasOwnProperty(i)) {
                continue;
            }
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
            if (!logUrls.hasOwnProperty(i)) {
                continue;
            }
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
    if (!tab) {
        return;
    }
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
function initBlockUrl() {
    blockUrls = LocalStorageManager.getAllBlockUrls();
}

var toggle = undefined;
function initToggle() {
    var tmp = LocalStorageManager.getToggleBlock();
    setToggle(tmp);
}

function onBlockUrlsChange(data) {
    if (data instanceof Array) {
        blockUrls = [].concat(data);
    } else {
        blockUrls = [].push(data);
    }
}

/**
 *
 * @param {MessageEvent} messageEvent
 */
function onMessage(messageEvent) {
    var data = messageEvent.data;
    var type = data.type;
    if (type === LocalStorageManager.BLOCK_URLS_CHANGE_NOTIFY) {
        onBlockUrlsChange(data.data);
    } else if (type === LocalStorageManager.TOGGLE_CHANGE_NOTIFY) {
        setToggle(data.data);
    }
}

function setToggle(cur) {
    if (toggle === cur) {
        return;
    }
    toggle = cur;
    if (cur) {
        chrome.browserAction.setIcon({path: '../images/icon.png'});
    } else {
        chrome.browserAction.setIcon({path: '../images/gray.png'});
    }
}

function init() {
    initBlockUrl();
    initToggle();
    window.addEventListener("message", onMessage);
}

$(document).ready(function() {
    init();
});