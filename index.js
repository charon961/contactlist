const port=3000;
const express=require('express');
const path =require('path');

const app=express();
app.set('view engine','ejs');

contactList=[
  {
     name:"yash",
     phone:"1212112"
  }
];
app.set('views',path.join(__dirname,'views'))
app.get("/",function(req,res){
    return res.render('home',{title:"Hello World!!", contactList:contactList});
})


app.listen(port,function(err){
      if(err){
      
      }
      else{
        console.log("server is running");
      }
})