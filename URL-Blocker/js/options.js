
var BLOCK_URLS_KEY = "BlockUrls";

function initUrlItems() {
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
    alert($(this).val());
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
    alert($(this).val());
}

function exportHandler() {
    alert($(this).val());
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

init();
function addItem(val) {
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

    var bg = chrome.extension.getBackgroundPage();
    bg.deleteUrl(url);
    return true;
}

init();
