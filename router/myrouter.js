const express = require("express");
const myrouter = express.Router();
const Connection=require("../db/dbconnection")


myrouter.get("/User", (req, resp) => {
    Connection.query("select * from Tasks", function () {
        (err, data, fields) => {
            if (!err) {
                resp.status(200).send(data);
            } else {
                resp.status(500).send("no data found")
            }
        }
    })})

    myrouter.get("/User", (req, resp) =>
        Connection.query("select * from Tasks where TId=?", [reqr.parms.Tid],
            function (err, data, fields) {
                if (!err) {
                    resp.status(200).send(data);
                } else {
                    resp.status(500).send("no data found")
                }
            }))

    myrouter.post("/User/:id", (req, resp) =>
        Connection.query("insert into Tasks values(?,?,?,?,?)", [req.body.Assignto, req.body.status, 
            req.body.dueDate, req.body.priority, req.body.Comments,], function 
            (err,data,fields){
                if (!err) {
                    resp.status(200).send("employee addes successfully")
                } else {
                    resp.status(500).send("no data found")
                }
            }))


            myrouter.put("/Users/:id", (req, resp) =>
                Connection.query("update User set Status=?,DueDate=?,priority=?,comments=?", [req.body.AssignedTO, req.body.status, req.body.dueDate, req.body.Priority, req.body.Comments], function
                    (err,data,fields){
                        if (!err) {
                            resp.status(200).send("User update successfully")
                        } else {
                            resp.status(500).send("no data found")
                        }
                    }))

                    myrouter.delete("/Users/:id", (req, resp) => {
                        Connection.query("delete from Tasks where TID=?", [reqr.parms.Tid], function 
                            (err,data,fields){
                                if (!err) {
                                    resp.status(200).send("data deleted successfully");
                                } else {
                                    resp.status(500).send("no data found")
                                }
                            }

                    )})
                    

                    module.exports = myrouter;