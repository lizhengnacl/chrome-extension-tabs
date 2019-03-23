/**
 * * Created by lee on 2019/3/22
 */

class Keyboard {
    constructor () {
        this.handleESC = this.handleESC.bind(this);
    }

    on (fn) {

    }

    handleESC (e) {

    }

    onESC (fn) {
        window.addEventListener('keyup', function(evt) {
            if(evt.keyCode == 27) {
                fn();
            }
        })
    }
}

export default new Keyboard();
