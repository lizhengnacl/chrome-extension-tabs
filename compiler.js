/**
 * * Created by lee on 2019/3/19
 */

const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config, (err, stats) => {
    if(err || stats.hasErrors()) {
        // lizheng11 debugger
        debugger
    }
    // lizheng11 debugger
    debugger
});
