/**
 * Created by lenovo on 2017/7/4.
 */

function obj2buf(obj) {
    return new Buffer(JSON.stringify(obj));
};

function buf2obj(buf) {
    return JSON.parse(buf.toString());
}
var obj = {
    name: 'maoruibin'
}
var buf = obj2buf(obj);
console.log(buf);


var newobj = buf2obj(buf);

console.log(newobj.name)