//add all libraries
const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const routes=require("./router/myrouter")
//add middlewares
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use("/",routes)
//start server
app.listen(5500,()=>{
    console.log("server started at port 4002")
})
module.exports=app;