const port=3000;
const express=require('express');
const path =require('path');

const body=require('body-parser');
const { param } = require('express/lib/request');

const app=express();
app.set('view engine','ejs');

app.use("/public", express.static(__dirname + '/public'));
app.use(body.urlencoded({extended:false}));
contactList=[];
app.set('views',path.join(__dirname,'views'))
app.get("/",function(req,res){
    return res.render('home',{title:"Contact List", contactList:contactList});
})

app.get("/delete-contact/:phone",function(req,res){
   let number=req.params.phone;
  let index=contactList.findIndex(f=>f.phone==number);
    if(index!=-1){
      contactList.splice(index,1);
    }
    return res.redirect("/");
})


app.post("/",function(req,res){
    contactList.push(req.body);
    return  res.redirect("/");
})




app.listen(port,function(err){
      if(err){
         console.log("Error!!!");
      }
      else{
        console.log("server is running");
      }
})