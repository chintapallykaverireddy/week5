const express=require('express');
const app=express();
const PORT= 3002;

app.get('/',(req,res)=>{
    res.send("Hello Everyone !");
});

app.listen(PORT,()=>{
    console.log("Server is running on local host https:/localhost:3002");
} );