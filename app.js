const express=require('express');
const app=express();
const PORT= 3008;

app.get('/',(req,res)=>{
    res.send("Hello Everyone !");
});

app.listen(PORT,()=>{
    console.log("Server is running on local host https:/localhost:3008");
} );