/**
 * * Created by lee on 2019/4/5
 */

const foo = () => {};

class Windows {

    active(windowId, fn = foo) {
        chrome.windows.update(windowId, {focused: true}, fn);
    }

    getCurrent(fn = foo) {
        chrome.windows.getCurrent(function(window) {
            fn(window);
        });
    }
}

export default new Windows();
