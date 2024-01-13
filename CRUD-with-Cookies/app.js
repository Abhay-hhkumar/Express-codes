import express from 'express';

const app =express();
import cookieParser from 'cookie-parser';
import web from './routes/web.js'

const port = process.env.PORT || '3000';


// cookie parser
app.use(cookieParser());

// load routes
app.use('/',web);

app.listen(port, ()=>{
    console.log(`server is listen at http://localhost:${port}`)
})



// npm init
// npm i express
// npm i nodemon
// npm i cookie-parser
// 

// //"scripts": {
//     "dev":"nodemon app"
//   },

// "type":"module",
