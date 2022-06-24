const express = require('express')
const app = express()
const port = 3000
app.listen(port,()=>{
    console.log(`Run in ${port}`)
});

    //res.send('Hello world');
    // res.json({
    //     nama : 'cece',
    //     umur : '20tahn'
    // });

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.sendFile('./template/index.html',{root : __dirname})
});

app.get('/kontak',(req,res)=>{
    res.sendFile('./template/kontak.html',{root : __dirname})
})
app.get('/about',(req,res)=>{
    res.sendFile('./template/about.html',{root : __dirname})
})
app.get('/detail',(req,res)=>{
    res.send(`ID : ${req.query.id} <br>nama : ${req.query.nama}`);
//    res.sendFile('./template/about.html',{root : __dirname})
})

app.use('/',(req,res)=>{
    res.status(404)
    res.send('Page Not Found');
  })