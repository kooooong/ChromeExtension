/**
 * Created by 2172980000466 on 2016/09/11.
 */
/**
 * test codes
 */
// window.my_log = function (x) {
//     console.log("%c"+x, "color:lime;background-color:wheat;");//font-size:28px;
// };
// my_log("script inserted");

var so = document.createElement("script");
so.language = "javascript";
so.type = "text/javascript";
so.defer = true;
so.id = "chrome-extension-script";
so.text = "window.my_log=function(x){console.log(\"%c\"+x, \"color:#7f0000;background-color:#7fff7f;font-family:'meiryo';\");};" +
"window.printVar=function(x){for(var k in x) {my_log('x['+k+']:'+x[k]);}};";
so.onload = so.onreadystatechange = function() {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
        my_log("script loaded and successfully runned.");
        so.onload = so.onreadystatechange = null;
    }
};
var head = document.getElementsByTagName("head").item(0);
head.appendChild(so);

