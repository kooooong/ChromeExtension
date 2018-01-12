/**
 *
 */
function initUrlItems() {
    var urls = LocalStorageManager.getAllBlockUrls();

    var list_str = '';
    for (var key in urls) {
        if (!urls.hasOwnProperty(key)) {
            continue;
        }

        var val = urls[key];
        if (!val || val == '') {
            continue;
        }

        list_str += getItemHtml(val);
    }
    $listContainer.append(list_str);

    $listContainer.off().on("click", ".url-item-delete", deleteItem);
}

function initUrlFilter() {
    $urlFilter.off().on("keyup", filterFunc);
}

function filterFunc() {
    var $this = $(this);
    var filterStr = $this.val();
    filterStr = filterStr.toUpperCase();
    var $urlList = $listContainer.children();
    if (!filterStr || filterStr === '') {
        $urlList.show();
        return;
    }
    $urlList.hide().filter(function(index, item) {
        var _item = $(item);
        var _itemText = _item.find('div.url-item-text');
        var _text = _itemText.text();
        _text = _text.toUpperCase();
        return _text.indexOf(filterStr) !== -1;
    }).show();
}

function deleteSelectedHandler() {
    alert($(this).val());
}

function deleteAllHandler() {
    LocalStorageManager.restoreAllBlockUrls([]);
}

function selectAllHandler() {
    $listContainer.children(":visible").find("input").attr("checked", true);
}

function deselectAllHandler() {
    $listContainer.children(":visible").find("input:checked").attr("checked", false);
}

function reverseSelectHandler() {
    $listContainer.children(":visible").find("input").each(function(index, item) {
        item.checked = !item.checked;
    });
}

function importHandler() {
    // alert($(this).val());
    $("#importFromFile").click();
}

function importFromFileHandler() {
    // alert("AHH");
    var file = $("#importFromFile")[0];
    if (file.files.length > 0 && file.files[0].name.length > 0) {
        var r = new FileReader();
        r.onload = function (e) {
            var urlsStr = e.target.result;
            LocalStorageManager.restoreAllBlockUrls(urlsStr);
        };
        r.onerror = function () {
            alert("onerror");
        };
        r.readAsText(file.files[0], "utf-8");
        file.value = "";
    }
}

function exportHandler() {
    // alert($(this).val());
    var allUrls = LocalStorageManager.getAllBlockUrls();
    var data = JSON.stringify(allUrls);
    saveFileAs("url_blocker_urls.json", data);
}

function initOperates() {
    // delete selected.
    var $deleteSelected = $("#delete-selected");
    $deleteSelected.off().on("click", deleteSelectedHandler);

    // delete all
    var $deleteAll = $("#delete-all");
    $deleteAll.off().on("click", deleteAllHandler);

    // select all
    var $selectAll = $("#select-all");
    $selectAll.off().on("click", selectAllHandler);

    // deselect all
    var $deselectAll = $("#deselect-all");
    $deselectAll.off().on("click", deselectAllHandler);

    // reverse select
    var $reverseSelect = $("#reverse-select");
    $reverseSelect.off().on("click", reverseSelectHandler);

    // import
    var $import = $("#import");
    $import.off().on("click", importHandler);

    // importFromFile (import helper)
    var $importFromFile = $("#importFromFile");
    $importFromFile.on("change", importFromFileHandler);

    // export
    var $export = $("#export");
    $export.off().on("click", exportHandler);
}

function init() {
    initUrlItems();
    initUrlFilter();
    initOperates();
}

var $listContainer = $("ul#urlList");
var $urlFilter = $("input#url-filter");
var $deleteSelected = $("input#delete-selected");

function getItemHtml(val) {
    var ret = '';
    ret += '<li class="url-item">';

    ret += '<label class="url-item-label">';
    ret += '<input type="checkbox" name="url-item" value="' + val + '">';
    ret += '<div class="url-item-text">' + val + '</div>';
    ret += '</label>';

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
    $this.remove();

    // var bg = chrome.extension.getBackgroundPage();
    // bg.deleteUrl(url);
    LocalStorageManager.deleteUrl(url);
    return true;
}

function saveFileAs(fileName, fileData) {
    try {
        var Blob = window.Blob || window.WebKitBlob;

        // Detect availability of the Blob constructor.
        var constructor_supported = false;
        if (Blob) {
            try {
                new Blob([], { "type" : "text/plain" });
                constructor_supported = true;
            } catch (_) { }
        }

        var b = null;
        if (constructor_supported) {
            b = new Blob([fileData], { "type" : "text/plain" });
        } else {
            // Deprecated BlobBuilder API
            var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder;
            var bb = new BlobBuilder();
            bb.append(fileData);
            b = bb.getBlob("text/plain");
        }

        saveAs(b, fileName);
    } catch (e) {
        console.error("Oops! Can't save generated file, " + e.toString());
    }
}

function onBlockUrlsChange(urls) {
    initUrlItems();
    var filterStr = $urlFilter.val();
    if (!filterStr || filterStr === "") {
        return;
    }
    $urlFilter.trigger("keyup");
}

/**
 *
 * @param {MessageEvent} messageEvent
 */
function onMessage(messageEvent) {
    $listContainer.html("");
    var data = messageEvent.data;
    if (data.type === LocalStorageManager.BLOCK_URLS_CHANGE_NOTIFY) {
        var urls = data.data;
        onBlockUrlsChange(urls)
    } else {
        // do nothing
    }
}
window.addEventListener("message", onMessage);

init();


