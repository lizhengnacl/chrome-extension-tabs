import './index.scss';
import im from './lib/im';
import keyboard from './lib/keyboard';
import state from './lib/state';

const config = {
    id: '__chrome_extension_tabs__'
};

// 创建一个挂载点
let mount = document.createElement('div');
mount.id = config.id;
document.body.appendChild(mount);

/**
 * 渲染列表
 * @param list
 */
function render (list, down = true) {
    let itemList = list.map(_ => ({
        id: _.id,
        title: _.title,
        favIconUrl: _.favIconUrl,
        url: _.url,
        active: _.active
    }))

    itemList = itemList.filter(item => {
        if(item.active === true) {
            return false;
        }
        // chrome 插件管理页
        if(item.url.indexOf('chrome://extensions') > -1) {
            return false;
        }
        return true;
    });

    if(state.isMount()) {
        if(down) {
            state.increaseIndex();
        } else {
            state.decreaseIndex();
        }
    }
    // 创建一个容器
    state.setList(itemList);

    renderContainer(itemList, state.getIndex());
}

/**
 * 卸载列表
 */
function unmountRender () {
    let mount = document.getElementById(config.id);
    mount.innerHTML = '';
    mount.style.display = 'none';

    state.unmount();
}

function renderContainer (list, index = 0) {
    let mount = document.getElementById(config.id);
    // 先清理一下
    mount.innerHTML = '';
    mount.style.display = 'none';

    let div = document.createElement('div');
    mount.style.display = 'block';
    list.forEach((item, i) => {
        div.appendChild(renderItem(item, i === index));
    })

    if(list.length === 0) {
        div.innerHTML = '404...';
    }
    mount.appendChild(div);

    state.mount();
}

function renderItem (item, selected) {
    let { id, favIconUrl, url, active } = item;
    let div = document.createElement('div');
    let className = 'item'
    if(selected) {
        className += ' selected'
    }
    div.className = className;

    div.innerHTML = `<div class="item-left"><img src="${item.favIconUrl}" alt=""></div><div class="item-right">${item.title}</div>`;

    div.addEventListener('click', function() {
        im.request({
            type: 'activeTab',
            data: id
        })
        unmountRender();
    })
    return div;
}

im.on(function(data, sender, sendResponse) {
    switch(data.type) {
        case 'tabsList':
            render(data.data);
            break;
    }
    sendResponse('');
})

keyboard.onESC(function() {
    unmountRender();
})

keyboard.onEnter(function(e) {
    if(state.isMount()) {
        let item = state.getItem();
        if(item) {
            im.request({
                type: 'activeTab',
                data: item.id
            })
        }
        unmountRender();
    }
})

keyboard.onUp(function(e) {
    if(state.isMount()) {
        render(state.getList(), false);
    }
})

keyboard.onDown(function(e) {
    if(state.isMount()) {
        render(state.getList(), true);
    }
})
