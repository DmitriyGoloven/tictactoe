const path = require('path');
const server = require('koa-static');
const Koa = require('koa');
const app = new Koa();


app.use(server(path.join(__dirname, './server')))

app.listen(3000);