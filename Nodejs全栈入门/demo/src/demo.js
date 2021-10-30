const os = require('os');

// 获取cpu核心数
const cpus = os.cpus();
console.log(cpus.length);

// 总内存
const total = os.totalmem();
console.log(total / 1024 / 1024 / 1024);

// 可用内存
const free = os.freemem();
console.log(free / 1024 / 1024 / 1024);

// web
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello world!!');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('服务启动成功')
})
