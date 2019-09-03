/**
 * * Created by lee on 2019/3/23
 */

const foo = () => {};

class Tabs {
    list(params = {}) {
        return new Promise((resolve, reject) => {
            chrome.tabs.query(params, function(tabs) {
                resolve(tabs);
            });
        });
    }

    active(id, fn = foo) {
        chrome.tabs.update(id, {active: true}, fn);
    }

    onActivated(fn) {
        chrome.tabs.onActivated.addListener(function({tabId, windowId}) {
            fn({tabId, windowId});
        });
    }

    onRemoved(fn) {
        chrome.tabs.onRemoved.addListener(
            function(tabId, {windowId, isWindowClosing}) {
                fn(tabId, {windowId, isWindowClosing});
            });
    }
}

export default new Tabs();
