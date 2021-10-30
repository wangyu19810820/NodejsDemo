const express = require('express');

const app = express();

// app.use((req, res) => {
//     res.json({
//         name: "张三"
//     })
// })

app.get('/name/:age', (req, res)=>{
    let {age} = req.params;
    res.json({
        name: 'tom',
        age
    })
})

app.post('/name', (req, res)=>{
    res.send('tom post')
})

app.listen(3000, () => {
    console.log('server 启动成功')
})