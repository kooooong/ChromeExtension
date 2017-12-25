/**
 * Created by kooooong on 2017/11/14.
 */
// test code.
// test jjjjj

(function(){

})();

var LocalStorageManager = {
    BLOCK_URLS_CHANGE_NOTIFY: "BlockUrlsChangeNotify",
    BLOCK_URLS_KEY: "BlockUrls",
    addUrl: function(url) {
        var allUrl = this.getAllBlockUrls();
        allUrl.push(url);
        var str = JSON.stringify(allUrl);
        localStorage.setItem(this.BLOCK_URLS_KEY, str);

        this.notifyBlockUrlsChange(allUrl);
    },
    notifyBlockUrlsChange: function(allUrls) {
        // notify to all views
        var views = chrome.extension.getViews();
        for (var i = 0; i < views.length; i++) {
            var v = views[i];
            v.postMessage({ type: this.BLOCK_URLS_CHANGE_NOTIFY, data: allUrls}, "*");
        }

    },
    deleteUrl: function(url) {
        var allUrl = this.getAllBlockUrls();
        var index = allUrl.indexOf(url);
        if (index > -1) {
            allUrl.splice(index, 1);
            var str = JSON.stringify(allUrl);
            localStorage.setItem(this.BLOCK_URLS_KEY, str);
            this.notifyBlockUrlsChange(allUrl);
        }
    },
    getAllBlockUrls: function() {
        var str = localStorage.getItem(this.BLOCK_URLS_KEY);
        var ret = [];
        if(!str || str === '') {
            return ret;
        }
        ret = (JSON).parse(str);
        return ret;
    }
};