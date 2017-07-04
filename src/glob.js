/**
 * Created by lenovo on 2017/7/3.
 */
const glob = require('glob');

glob('../**',{matchBase: true}, function(err, files) {
    var files = files.filter(function(ele) {
        return ele.indexOf('node_modules') == -1;
    })
    console.log(files);
})