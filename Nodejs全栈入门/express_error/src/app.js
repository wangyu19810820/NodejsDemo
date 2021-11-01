const express = require('express')
const app = express()

app.get('/demo1',(req, res)=>{
    res.json({
        message: 'demo1'
    })
})

app.get('/demo', (req, res) => {
    throw new Error('测试异常功能')
})

function demo_middleware(req, res, next) {
    try {

    } catch (error) {
        next(error);
    }
}

function error_handler_middleware(err, req, res, next) {
    if(err) {
        let {message} = err;
        res.status(500)
        .json({
            message:`${message||'服务器异常'}`
        })
    }
}

function not_found_handler(req, res, next) {
    res.json({
        message: 'api不存在'
    })
}

app.use(not_found_handler);
app.use(error_handler_middleware);

app.listen(3000, () => {
    console.log('服务启动成功');
})