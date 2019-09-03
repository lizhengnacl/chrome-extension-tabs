/**
 * * Created by lee on 2019/3/22
 */
const foo = () => {};

class IM {
    on(fn) {
        chrome.runtime.onMessage.addListener(fn);
    }

    request(data, fn = foo) {
        chrome.runtime.sendMessage(data, fn);
    }
}

export default new IM();
