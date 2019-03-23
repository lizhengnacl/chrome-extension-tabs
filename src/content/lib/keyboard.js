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
            if(evt.keyCode === 27 && evt.key === 'Escape') {
                fn(evt);
            }
        })
    }

    onEnter (fn) {
        window.addEventListener('keyup', function(evt) {
            if(evt.keyCode === 13 && evt.key === 'Enter') {
                fn(evt);
            }
        })
    }

    onUp (fn) {
        window.addEventListener('keyup', function(evt) {
            if(evt.keyCode === 38 && evt.key === 'ArrowUp') {
                fn(evt);
            }
        })
    }

    onDown (fn) {
        window.addEventListener('keyup', function(evt) {
            if(evt.keyCode === 40 && evt.key === 'ArrowDown') {
                fn(evt);
            }
        })
    }
}

export default new Keyboard();
