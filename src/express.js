/**
 * Created by lenovo on 2017/7/3.
 */
const express = require('express');

const server = express();

server.use(function(req, res) {
    res.end('hello world express');
})
server.listen(3005, function() {
    console.log('server start at : 3004')
});

server.listen(3006, function() {
    console.log('server start at : 3009')
});