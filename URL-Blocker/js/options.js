
var BLOCK_URLS_KEY = "BlockUrls";

function init() {
    var save = localStorage.getItem(BLOCK_URLS_KEY);
    if (!save || save == '') {
        return;
    }

    var urls = JSON.parse(save);
    if (!$.isArray(urls)) {
        urls = [].concat(urls);
    }

    var list_str = '';
    for (var key in urls) {
        if (!urls.hasOwnProperty(key)) {
            continue;
        }

        var val = urls[key];
        if (!val || val == '') {
            continue;
        }

        list_str += addItem(val);
    }
    $listContainer.append(list_str);

    $listContainer.off().on("click", ".url-item-delete", deleteItem);
}

var $listContainer = $("ul#urlList");
init();
function addItem(val) {
    var ret = '';
    ret += '<li class="url-item">';
    ret += '<div class="url-item-text">' + val + '</div>';
    ret += '<button class="url-item-delete">' + 'X' + '</button>';
    ret += '</li>';
    return ret;
}

function deleteItem(event) {
    event.preventDefault();
    var $this = $(this);
    var url = $this.prev().text();
    console.log($this);
    alert("delete" + url);

    var bg = chrome.extension.getBackgroundPage();
    bg.deleteUrl(url);
    return true;
}

init();
