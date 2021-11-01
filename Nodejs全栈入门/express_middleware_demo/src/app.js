const express = require('express');
const userRouter = require('./router/user_router')
const app = express();

function log_middleware(req, res, next) {
    console.log('请求来了...');
    next();
}
app.use(log_middleware);

app.use(express.static('static', {
    extensions:['html', 'htm']
}))

app.use('/user', userRouter);

// function valid_name_middleware(req, res, next) {
//     let {name} = req.query;
//     if (!name || !name.length) {
//         res.json({
//             message: '缺少name参数'
//         })
//     } else {
//         next();
//     }
// }
// app.all('*', valid_name_middleware)

// app.get('/test',(req,res)=>{
//     res.json({
//         message:'test'
//     })
// })

app.listen(3000, ()=>{
    console.log('服务启动成功')
})