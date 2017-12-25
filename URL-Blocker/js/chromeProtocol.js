/**
 *
 */
var chrome = {
    app: {
        isInstalled: false
    },
    browserAction: {},
    extension: {},
    i18n: {},
    management: {},
    permissions: {},
    runtime: {},
    tabs: {},
    webRequest: {},
    windows: {}
};

chrome.__proto__.csi = function () {

};
chrome.__proto__.loadTimes = function () {

};
chrome.__proto__.Event = function () {

};
chrome.app.__proto__.getDetails = function () {

};
chrome.app.__proto__.getIsInstalled = function () {

};
chrome.app.__proto__.installState = function () {

};
chrome.app.__proto__.runningState = function () {

};


function Event() {

}

Event.prototype.addListener = function () {

};
Event.prototype.addRules = function () {

};
Event.prototype.dispatch = function () {

};
Event.prototype.dispatchToListener = function () {

};
Event.prototype.getRules = function () {

};
Event.prototype.hasListener = function () {

};
Event.prototype.hasListeners = function () {

};
Event.prototype.removeListener = function () {

};
Event.prototype.removeRules = function () {

};

chrome.browserAction = {
    onClicked: new Event()
};
chrome.browserAction.__proto__.disable = function () {

};
chrome.browserAction.__proto__.enable = function () {

};
chrome.browserAction.__proto__.getBadgeBackgroundColor = function () {

};
chrome.browserAction.__proto__.getBadgeText = function () {

};
chrome.browserAction.__proto__.getPopup = function () {

};
chrome.browserAction.__proto__.getTitle = function () {

};
chrome.browserAction.__proto__.setBadgeBackgroundColor = function () {

};
chrome.browserAction.__proto__.setBadgeText = function () {

};
chrome.browserAction.__proto__.setIcon = function () {

};
chrome.browserAction.__proto__.setPopup = function () {

};
chrome.browserAction.__proto__.setTitle = function () {

};

chrome.extension = {
    ViewType: {TAB: "tab", POPUP: "popup"},
    inIncognitoContext: false,
    onConnect: new Event(),
    onConnectExternal: new Event(),
    onMessage: new Event(),
    onMessageExternal: new Event(),
    onRequest: new Event(),
    onRequestExternal: new Event()
};

chrome.extension.__proto__.connect = function () {
};
chrome.extension.__proto__.getBackgroundPage = function () {
};
chrome.extension.__proto__.getURL = function () {
};
/**
 * @return {[Window]}
 */
chrome.extension.__proto__.getViews = function () {
};
chrome.extension.__proto__.isAllowedFileSchemeAccess = function () {
};
chrome.extension.__proto__.sendMessage = function () {
};
chrome.extension.__proto__.sendRequest = function () {
};
chrome.extension.__proto__.connect = function () {
};
chrome.extension.__proto__.setUpdateUrlData = function () {
};

chrome.i18n.__proto__.detectLanguage = function () {
};
chrome.i18n.__proto__.getAcceptLanguages = function () {
};
chrome.i18n.__proto__.getMessage = function () {
};
chrome.i18n.__proto__.getUILanguage = function () {
};

chrome.management = {
    ExtensionDisabledReason: {UNKNOWN: "unknown", PERMISSIONS_INCREASE: "permissions_increase"},
    ExtensionInstallType: {
        ADMIN: "admin",
        DEVELOPMENT: "development",
        NORMAL: "normal",
        SIDELOAD: "sideload",
        OTHER: "other"
    },
    ExtensionType: {
        EXTENSION: "extension",
        HOSTED_APP: "hosted_app",
        PACKAGED_APP: "packaged_app",
        LEGACY_PACKAGED_APP: "legacy_packaged_app",
        THEME: "theme"
    },
    LaunchType: {
        OPEN_AS_REGULAR_TAB: "OPEN_AS_REGULAR_TAB",
        OPEN_AS_PINNED_TAB: "OPEN_AS_PINNED_TAB",
        OPEN_AS_WINDOW: "OPEN_AS_WINDOW",
        OPEN_FULL_SCREEN: "OPEN_FULL_SCREEN"
    }
};
chrome.management.__proto__.getPermissionWarningsByManifest = function () {
};
chrome.management.__proto__.getSelf = function () {
};
chrome.management.__proto__.uninstallSelf = function () {
};

chrome.permissions = {
    onAdded: new Event(),
    onRemoved: new Event()
};
chrome.permissions.__proto__.contains = function () {
};
chrome.permissions.__proto__.getAll = function () {
};
chrome.permissions.__proto__.remove = function () {
};
chrome.permissions.__proto__.request = function () {
};

chrome.runtime = {
    OnInstalledReason: {
        INSTALL: "install",
        UPDATE: "update",
        CHROME_UPDATE: "chrome_update",
        SHARED_MODULE_UPDATE: "shared_module_update"
    },
    OnRestartRequiredReason: {APP_UPDATE: "app_update", OS_UPDATE: "os_update", PERIODIC: "periodic"},
    PlatformArch: {ARM: "arm", X86_32: "x86-32", X86_64: "x86-64"},
    PlatformNaclArch: {ARM: "arm", X86_32: "x86-32", X86_64: "x86-64"},
    PlatformOs: {
        ANDROID: "android",
        CROS: "cros",
        LINUX: "linux",
        MAC: "mac",
        OPENBSD: "openbsd",
        WIN: "win"
    },
    RequestUpdateCheckStatus: {THROTTLED: "throttled", NO_UPDATE: "no_update", UPDATE_AVAILABLE: "update_available"},
    id: "cdepfjfpbgeooiimdjkooaobppoglcid",
    onBrowserUpdateAvailable: new Event(),
    onConnect: new Event(),
    onConnectExternal: new Event(),
    onInstalled: new Event(),
    onMessage: new Event(),
    onMessageExternal: new Event(),
    onRestartRequired: new Event(),
    onStartup: new Event(),
    onSuspend: new Event(),
    onSuspendCanceled: new Event(),
    onUpdateAvailable: new Event()
};
chrome.runtime.__proto__.connect = function () {
};
chrome.runtime.__proto__.getBackgroundPage = function () {
};
chrome.runtime.__proto__.getManifest = function () {
};
chrome.runtime.__proto__.getPackageDirectoryEntry = function () {
};
chrome.runtime.__proto__.getPlatformInfo = function () {
};
chrome.runtime.__proto__.getURL = function () {
};
chrome.runtime.__proto__.openOptionsPage = function () {
};
chrome.runtime.__proto__.reload = function () {
};
chrome.runtime.__proto__.requestUpdateCheck = function () {
};
chrome.runtime.__proto__.restart = function () {
};
chrome.runtime.__proto__.restartAfterDelay = function () {
};
chrome.runtime.__proto__.sendMessage = function () {
};
chrome.runtime.__proto__.setUninstallURL = function () {
};

chrome.tabs = {
    MutedInfoReason: {USER: "user", CAPTURE: "capture", EXTENSION: "extension"},
    TAB_ID_NONE: -1,
    TabStatus: {LOADING: "loading", COMPLETE: "complete"},
    WindowType: {NORMAL: "normal", POPUP: "popup", PANEL: "panel", APP: "app", DEVTOOLS: "devtools"},
    ZoomSettingsMode: {AUTOMATIC: "automatic", MANUAL: "manual", DISABLED: "disabled"},
    ZoomSettingsScope: {PER_ORIGIN: "per-origin", PER_TAB: "per-tab"},
    onActivated: new Event(),
    onActiveChanged: new Event(),
    onAttached: new Event(),
    onCreated: new Event(),
    onDetached: new Event(),
    onHighlightChanged: new Event(),
    onHighlighted: new Event(),
    onMoved: new Event(),
    onRemoved: new Event(),
    onReplaced: new Event(),
    onSelectionChanged: new Event(),
    onUpdated: new Event(),
    onZoomChange: new Event()
};
chrome.tabs.__proto__.captureVisibleTab = function () {
};
chrome.tabs.__proto__.connect = function () {
};
chrome.tabs.__proto__.create = function () {
};
chrome.tabs.__proto__.detectLanguage = function () {
};
chrome.tabs.__proto__.discard = function () {
};
chrome.tabs.__proto__.duplicate = function () {
};
chrome.tabs.__proto__.executeScript = function () {
};
chrome.tabs.__proto__.get = function () {
};
chrome.tabs.__proto__.getAllInWindow = function () {
};
chrome.tabs.__proto__.getCurrent = function () {
};
chrome.tabs.__proto__.getSelected = function () {
};
chrome.tabs.__proto__.getZoom = function () {
};
chrome.tabs.__proto__.getZoomSettings = function () {
};
chrome.tabs.__proto__.highlight = function () {
};
chrome.tabs.__proto__.insertCSS = function () {
};
chrome.tabs.__proto__.move = function () {
};
chrome.tabs.__proto__.query = function () {
};
chrome.tabs.__proto__.reload = function () {
};
chrome.tabs.__proto__.remove = function () {
};
chrome.tabs.__proto__.sendMessage = function () {
};
chrome.tabs.__proto__.sendRequest = function () {
};
chrome.tabs.__proto__.setZoom = function () {
};
chrome.tabs.__proto__.setZoomSettings = function () {
};
chrome.tabs.__proto__.update = function () {
};

chrome.webRequest = {
    MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: 20,
    OnAuthRequiredOptions: {RESPONSE_HEADERS: "responseHeaders", BLOCKING: "blocking", ASYNC_BLOCKING: "asyncBlocking"},
    OnBeforeRedirectOptions: {RESPONSE_HEADERS: "responseHeaders"},
    OnBeforeRequestOptions: {BLOCKING: "blocking", REQUEST_BODY: "requestBody"},
    OnBeforeSendHeadersOptions: {REQUEST_HEADERS: "requestHeaders", BLOCKING: "blocking"},
    OnCompletedOptions: {RESPONSE_HEADERS: "responseHeaders"},
    OnHeadersReceivedOptions: {BLOCKING: "blocking", RESPONSE_HEADERS: "responseHeaders"},
    OnResponseStartedOptions: {RESPONSE_HEADERS: "responseHeaders"},
    OnSendHeadersOptions: {REQUEST_HEADERS: "requestHeaders"},
    ResourceType: {
        CSP_REPORT: "csp_report",
        FONT: "font",
        IMAGE: "image",
        MAIN_FRAME: "main_frame",
        MEDIA: "media",
        OBJECT: "object",
        OTHER: "other",
        PING: "ping",
        SCRIPT: "script",
        STYLESHEET: "stylesheet",
        SUB_FRAME: "sub_frame",
        WEBSOCKET: "websocket",
        XMLHTTPREQUEST: "xmlhttprequest"
    },
    onAuthRequired: new WebRequestEvent(),
    onBeforeRedirect: new WebRequestEvent(),
    onBeforeRequest: new WebRequestEvent(),
    onBeforeSendHeaders: new WebRequestEvent(),
    onCompleted: new WebRequestEvent(),
    onErrorOccurred: new WebRequestEvent(),
    onHeadersReceived: new WebRequestEvent(),
    onResponseStarted: new WebRequestEvent(),
    onSendHeaders: new WebRequestEvent()
};

function WebRequestEvent() {
}
WebRequestEvent.prototype = Event.prototype;
chrome.webRequest.__proto__.handlerBehaviorChanged = function () {
};

chrome.windows = {
    CreateType: {NORMAL: "normal", POPUP: "popup", PANEL: "panel"},
    WINDOW_ID_CURRENT: -2,
    WINDOW_ID_NONE: -1,
    WindowState: {
        NORMAL: "normal",
        MINIMIZED: "minimized",
        MAXIMIZED: "maximized",
        FULLSCREEN: "fullscreen",
        DOCKED: "docked"
    },
    WindowType: {NORMAL: "normal", POPUP: "popup", PANEL: "panel", APP: "app", DEVTOOLS: "devtools"},
    onCreated: new Event(),
    onFocusChanged: new Event(),
    onRemoved: new Event()
};

chrome.windows.__proto__.create = function () {
};
chrome.windows.__proto__.get = function () {
};
chrome.windows.__proto__.getAll = function () {
};
chrome.windows.__proto__.getCurrent = function () {
};
chrome.windows.__proto__.getLastFocused = function () {
};
chrome.windows.__proto__.remove = function () {
};
chrome.windows.__proto__.update = function () {
};


var args = {
    frameId: 0,
    method: "GET",
    parentFrameId: -1,
    requestId: "76338",
    tabId: 293,
    timeStamp: 1512851873174.573,
    type: "main_frame",
    url: "https://www.zhihu.com/question/21926079"
};