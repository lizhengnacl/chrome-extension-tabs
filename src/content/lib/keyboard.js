/**
 * * Created by lee on 2019/3/22
 */
import throttle from 'lodash.throttle';

class Keyboard {
    constructor() {
        this.throttleTime = 50;
    }

    onESC(fn) {
        window.addEventListener('keyup', function(evt) {
            if (evt.keyCode === 27 && evt.key === 'Escape') {
                fn(evt);
            }
        });
    }

    onEnter(fn) {
        window.addEventListener('keyup', function(evt) {
            if (evt.keyCode === 13 && evt.key === 'Enter') {
                fn(evt);
            }
        });
    }

    onUp(fn) {
        fn = throttle(fn, this.throttleTime);
        window.addEventListener('keydown', function(evt) {
            if (evt.keyCode === 38 && evt.key === 'ArrowUp') {
                fn(evt);
            }
        });
    }

    onDown(fn) {
        fn = throttle(fn, this.throttleTime);
        window.addEventListener('keydown', function(evt) {
            if (evt.keyCode === 40 && evt.key === 'ArrowDown') {
                fn(evt);
            }
        });
    }
}

export default new Keyboard();
