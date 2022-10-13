 const express=require('express');
 const morgan=require('morgan');
 const mongoose=require('mongoose');
 const app = express();
 const blogRoutes = require('./routes/blogRoutes') 
 
 const dbURI='mongodb+srv://sparsh:Sparsh89@cluster0.fxx8hal.mongodb.net/node?retryWrites=true&w=majority';

 mongoose.connect(dbURI,{ useNewUrlParser:true,useUnifiedTopology:true})
 .then((result)=> app.listen(3000)).catch((err)=>console.log(err));
 
 app.set('view engine','ejs')
 //urlencoded helps pass the data from /create to post on /blogs
 app.use(express.urlencoded({extended:true}));
 app.use(express.static('public'));
 app.use(morgan('dev'));
 
 
app.use(blogRoutes);

 app.get('/',(req,res)=>{
     res.redirect('/blogs');
 }) 
 app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
 })
 
 app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
 })