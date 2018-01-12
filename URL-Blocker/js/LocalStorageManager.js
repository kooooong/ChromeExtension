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
    TOGGLE_BLOCK_KEY: "ToggleBlock",
    TOGGLE_CHANGE_NOTIFY: "ToggleChanged",
    getToggleBlock : function() {
        var str = localStorage.getItem(this.TOGGLE_BLOCK_KEY);
        return !(!str || str === "false");
    },
    addUrl: function(url) {
        var allUrl = this.getAllBlockUrls();
        allUrl.push(url);
        var str = JSON.stringify(allUrl);
        localStorage.setItem(this.BLOCK_URLS_KEY, str);

        this.notifyBlockUrlsChange(allUrl);
    },
    notifyBlockUrlsChange: function(allUrls) {
        var data = { type: this.BLOCK_URLS_CHANGE_NOTIFY, data: allUrls};
        this.notifyAllViews(data);
    },
    notifyAllViews: function(data) {
        // notify to all views
        var views = chrome.extension.getViews();
        for (var i = 0; i < views.length; i++) {
            var v = views[i];
            v.postMessage(data, "*");
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
    },
    restoreAllBlockUrls: function (urlsStr) {
        if (!urlsStr) {
            return;
        }
        var urls = JSON.parse(urlsStr);
        if (!urls || !(urls instanceof Array)) {
            return;
        }
        localStorage.setItem(this.BLOCK_URLS_KEY, urlsStr);
        this.notifyBlockUrlsChange(urls);
    },
    notifyToggleChanged: function(toggle) {
        var data = {type: this.TOGGLE_CHANGE_NOTIFY, data: toggle};
        this.notifyAllViews(data);
    },
    toggleBlock: function() {
        var cur = this.getToggleBlock();
        cur = !cur;
        localStorage.setItem(this.TOGGLE_BLOCK_KEY, cur);
        this.notifyToggleChanged(cur);
    }
};