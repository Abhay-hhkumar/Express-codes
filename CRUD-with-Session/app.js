import express from 'express';
const app =express();
const port = process.env.PORT || '3000';
import web from './routes/web.js';
import session from 'express-session';


// session
// when we run the server then a session will get created with the help of below properties
app.use(session({

    name:"mysession",
    secret:'iamkey',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:200000}
}))
// routes load
app.use('/',web);


app.listen(port, ()=>{
    console.log(`Server is listen at http://localhost:${port}`)
})

// installed package
// npm init
// npm i express
// npm i nodemon
// npm i express-session


// "scripts": {
//     "dev":"nodemon app"
//   },

//   "type":"module"