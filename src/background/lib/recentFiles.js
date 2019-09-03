/**
 * * Created by lee on 2019/3/23
 */

class RecentFiles {
    constructor() {
        this.list = [];
    }

    add(id) {
        let index = this.list.indexOf(id);
        // 如果不存在，直接放在首位
        if (index === -1) {
            this.list.unshift(id);
        } else {
            // 如果存在，提升到首位
            this.list.splice(index, 1);
            this.list.unshift(id);
        }
    }

    remove(id) {
        let index = this.list.indexOf(id);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

    getList(list, fn) {
        return this.list;
    }

    // 根据list排序arr
    sort(arr) {
        // 分组
        let include = [];
        let rest = [];
        arr.forEach(item => {
            if (this.list.indexOf(item.id) > -1) {
                include.push(item);
            } else {
                rest.push(item);
            }
        });

        // 排序s
        let sorted = [];
        this.list.forEach(id => {
            let item = findItem(include, id);
            if (item !== null) {
                sorted.push(item);
            }
        });
        return sorted.concat(rest);
    }
}

function findItem(list, id) {
    let res = null;
    list.forEach((item) => {
        if (item.id === id) {
            res = item;
        }
    });
    return res;
}

// let r = new RecentFiles();
// r.add(3);
// r.add(2);
// r.add(1);
// let arr = [{ id: 2 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 1 }, { id: 3 }, { id: 4 }];
// console.log('========== lizheng11 ==========\n', r.getList(), r.sort(arr))
// // r.remove(2);
// // r.remove(3);
// // r.remove(1);
// console.log('========== lizheng11 ==========\n', r.getList(), '\n', r.sort(arr))

export default new RecentFiles();
