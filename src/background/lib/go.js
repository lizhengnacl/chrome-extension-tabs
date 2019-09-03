function go(command) {
    getCurrentWindow().then(function(windowId) {
        return getCurrentTabIndex(windowId);
    }).then(function(obj) {
        return getTabIdByIndex(obj.index + command, obj.windowId);
    }).then(function(id) {
        return selectTabById(id);
    });
}

/**
 * 获取被选中窗口id
 * @returns {Promise}
 */
function getCurrentWindow() {
    return new Promise(function(resolve) {
        chrome.windows.getLastFocused(function(window) {
            resolve(window.id);
        });
    });
}

/**
 * 获取当前页tab index
 * @returns {Promise}
 */
function getCurrentTabIndex(windowId) {
    return new Promise(function(resolve) {
        chrome.tabs.query({
            active: true,
            windowId: windowId,
        }, function(tab) {
            if (tab.length) {
                resolve({
                    index: tab[0].index,
                    windowId: windowId,
                });
            }
        });
    });
}

/**
 * 根据id获取tab index
 * @param index
 * @returns {Promise}
 */
function getTabIdByIndex(index, windowId) {
    return new Promise(function(resolve) {
        chrome.tabs.query({
            index: index,
            windowId: windowId,
        }, function(tab) {
            if (tab.length) {
                resolve(tab[0].id);
            }
        });
    });
}

/**
 * 根据id选中相应的tab
 * @param id
 */
function selectTabById(id) {
    return new Promise(function() {
        chrome.tabs.update(id, {active: true});
    });
}

export default go;
