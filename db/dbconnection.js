const mysql=require("mysql");

var mysqlconnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'system',
    database:'iacsd52',
    port:3306
})
mysqlconnection.connect((err)=>{
    if(!err){
        console.log("connction done")
    }else{
        console.log("connection fail" +JSON.stringify(err))
    }

})

module.exports=mysqlconnection;



