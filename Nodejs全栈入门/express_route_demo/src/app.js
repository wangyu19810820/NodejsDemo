const express = require('express');
const app = express()

const memberRouter = require('./member.router');
const skuRouter = require('./sku.router')

app.use('/member', memberRouter)
app.use('/sku', skuRouter)

// app.get('/demo',(req, res)=>{
//     res.json({
//         message:'hello express route from get demo'
//     })
// })

// app.post('/demo',(req, res)=>{
//     res.json({
//         message:'hello express route from post demo'
//     })
// })

// app.get('/user/byname',(req,res)=>{
//     let {name} = req.query
//     res.json({
//         name
//     })
// })

// app.get('/user/byid',(req,res)=>{
//     let {id} = req.query
//     res.json({
//         id
//     })
// })

// app.all('/demo2', (req, res) => {
//     res.json({
//         message:'demo',
//         method:req.method
//     })
// })

// app.all('*', (req,res)=>{
//     res.json({
//         message:'demo',
//         method:req.method,
//         uri:req.path
//     })
// })

// app.use('/demo3',(req,res)=>{
//     res.json({
//         message:'from use demo',
//         method:req.method
//     })
// })

// app.use((req,res)=>{
//     res.json({
//         message:'from use demo',
//         method:req.method,
//         uri:req.path
//     })
// })

app.listen(3000, () => {
    console.log('服务启动成功')
})