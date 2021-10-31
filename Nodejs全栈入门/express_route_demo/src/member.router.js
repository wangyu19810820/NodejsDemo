const express = require('express');

const router = express.Router();

router.get('/list',(req,res)=>{
    res.json({
        list:[
            {
                id:001,
                name:'张三'
            },
            {
                id:002,
                name:'李四'
            }
        ]
    })
})

module.exports = router