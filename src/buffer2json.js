/**
 * Created by lenovo on 2017/7/4.
 */
var buffer = new Buffer('我爱你');

console.log(buffer);

var bufferJson = JSON.stringify(buffer);
console.log(typeof bufferJson);

var mybuffer = JSON.parse(bufferJson);
var buffer2 = new Buffer(mybuffer);
var str = buffer2.toString();

console.log(JSON.stringify(new Buffer(str)))