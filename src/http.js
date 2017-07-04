/**
 * Created by lenovo on 2017/7/3.
 */
const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    console.log(http.Agent.sockets);
    res.end('hello world');
});
server.listen(3004, function() {
    console.log('server start at : 3004')
});
//
// server.listen(3009, function() {
//     console.log('server start at : 3009')
// });