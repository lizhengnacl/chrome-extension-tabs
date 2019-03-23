/**
 * * Created by lee on 2019/3/22
 */

class Keyboard {
    on (fn) {
        chrome.commands.onCommand.addListener(fn);
    }
}

export default new Keyboard();
