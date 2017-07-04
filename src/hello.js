/**
 * Created by lenovo on 2017/7/3.
 */
const Koa = require('koa');
const co = require('co')

const app = new Koa();
app.use(co.wrap(function *(ctx, next) {
    const start = new Date();
    yield next();
    console.log(22)
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    }));

app.use(co.wrap(function *(ctx, next) {
    console.log(0);
    yield next();
    console.log(1);
}));

app.use(ctx =>{
    ctx.body = 'hello maoruibi222n'});


app.listen(3000, function () {
    console.log('server start 3000')
});

app.listen(3001, function () {
    console.log('server start 3001')
});