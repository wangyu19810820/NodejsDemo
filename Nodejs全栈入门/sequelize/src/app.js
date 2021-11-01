const express = require('express');
const app = express();

const models = require('../models');

app.get('/create',async (req,res)=>{
    let {name} = req.query;

    let user = await models.User.create({
        name
    })
    console.log(user);
    res.json({
        message: '创建成功',
        user
    })
})

app.get('/list', async(req, res)=>{
    let list = await models.User.findAll();
    res.json({
        list
    })
})

app.get('/detail/:id', async(req,res)=>{
    let {id} = req.params;
    let user = await models.User.findOne({
        where:{
            id
        }
    })
    res.json({
        user
    })
})

app.listen(3000, ()=>{
    console.log('服务成功启动')
})