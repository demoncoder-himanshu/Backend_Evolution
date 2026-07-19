const express = require("express");
const server = express();

server.use(express.json())

server.get('/',(req,res)=>{
  res.send("This is home page")  
})

server.get('/about',(req,res)=>{
  res.send("This is about page")  
})

server.get('/profile',(req,res)=>{
  res.send("This is profile page")  
})

server.post('/',(req,res)=>{
    res.send("getting some data")
    console.log(req.body)
})

server.listen(7000,(req,res)=>{
    console.log("server running on server 7000")
})