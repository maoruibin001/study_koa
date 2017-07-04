/**
 * Created by lenovo on 2017/7/3.
 */
const Koa =require('koa');

const app = new Koa();

app.use((ctx, next) => {
   const start = new Date();
   console.log(11)
   return (next().then(() => {
       console.log(33)
       const ms = new Date() - start;
       console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
   }))
});

// app.use(async(ctx, next) => {
//     const start = new Date();
//     await next();
//     const ms = new Date() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });
// app.use(async(ctx, next) => {
//    const start = new Date();
//    console.log(1222)
//     await next();
//    console.log(33)
//    const ms = new Date() - start;
//    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });
app.use((ctx, next) => {
    console.log('hello');
    next();
});
app.use(ctx =>{
    console.log(22)
    ctx.body = 'hello maoruibin2222'});


app.listen(3300, function () {
    console.log('server start 3200')
})