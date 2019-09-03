/**
 * * Created by lee on 2019/3/22
 */

class IM {
    on(fn) {
        chrome.runtime.onMessage.addListener(fn);
    }

    request(data, fn) {
        // 当前激活窗口
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, data, fn);
            }
        });
    }
}

export default new IM();
