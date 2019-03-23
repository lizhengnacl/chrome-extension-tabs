import im from './lib/im';
import keyboard from './lib/keyboard';
import tabs from './lib/tabs';

// 接受来自content的请求

im.on(function(data, sender, sendResponse) {
    switch(data.type) {
        case 'activeTab':
            tabs.active(data.data);
            break;
    }
    console.log('收到来自content-script的消息：');
    console.log(data, sender, sendResponse);
})

keyboard.on(function(command) {
    // 配合manifest中的commands
    if(command === 'save') {
        // im.request({ cmd: 'test', value: '你好，我是popup！' }, function(response) {
        //     // 若没主动回复，则得到undefined
        //     console.log('来自content的回复：' + response);
        // });

        tabs.list().then((list) => {
            // 发送请求到前台
            im.request({
                type: 'tabsList',
                data: list
            }, function(response) {})
        })
    }
});

