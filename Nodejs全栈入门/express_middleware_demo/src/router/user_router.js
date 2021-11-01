const express = require('express');
const router = express.Router();

router.use(function(req, res, next){
    console.log('log from router');
    next();
})

function vlaid_login_params(req, res, next) {
    let {name, password} = req.query;
    if (!name || !password) {
        res.json({
            message:'参数校验失败'
        })
    } else {
        req.formdata = {
            name,
            password
        }
        next();
    }
}
router.get('/login', [vlaid_login_params], (req, res)=>{
    let {formdata} = req;
    res.json({
        formdata,
        message: 'from router demo'
    })
})

module.exports = router;