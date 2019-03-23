/**
 * * Created by lee on 2019/3/23
 */

class State {
    constructor () {
        this.index = 0;
        this.list = [];
        this.rendered = false;
    }

    increaseIndex () {
        let len = this.list.length;
        let i = this.index;
        if(len > 0) {
            this.index = (i + 1) % this.list.length;
        } else {
            this.index = 0;
        }
    }

    decreaseIndex () {
        let len = this.list.length;
        let i = this.index;
        if(len > 0) {
            if(i > 0) {
                this.index = (i - 1) % this.list.length;
            } else if(i === 0) {
                this.index = this.list.length - 1;
            }
        } else {
            this.index = 0;
        }
    }

    getIndex () {
        return this.index;
    }

    getItem () {
        return this.list[this.index]
    }

    setList (list) {
        this.list = list;
    }

    getList () {
        return this.list;
    }

    mount () {
        this.rendered = true;
    }

    unmount () {
        this.list = [];
        this.index = 0;
        this.rendered = false;
    }

    isMount () {
        return this.rendered === true;
    }
}

export default new State();
