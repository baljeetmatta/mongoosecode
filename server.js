const express=require("express");
const app=express();
const client=require("mongoose");
client.connect("mongodb://127.0.0.1:27017/NProject").then((response)=>{

})
const User=require("./models/userModel");
app.get("/saveData",(req,res)=>{

let obj={};

obj.password="pass";
obj.role="Admin";
//obj.Firstname="John"
//obj.Lastname="Test";

const userObj=new User(obj);
userObj.Name="Test name";

console.log(userObj.Firstname);
//userObj.save()
res.end();



})


app.listen(3000,(err)=>{
    console.log("Server Started...");

})