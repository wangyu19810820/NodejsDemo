const express = require('express');
const router = express.Router();

router.get('/list',(req,res)=>{
    res.json({
        list:[
            {
                id:001,
                price:100,
                name:'鞋子'
            }
        ]
    })
})

module.exports = router