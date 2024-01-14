import express from 'express';
const app =express();
const port = process.env.PORT || '3000';
import web from './routes/web.js';
import session from 'express-session';

import connectDB from './db/connectdb.js';
const DATABASE_URL =process.env.DATABASE_URL || "mongodb://localhost:27017";
// connection with mongodb
connectDB(DATABASE_URL);

// it use to connect with mongo to staore session variables
import MongoStore from 'connect-mongo';

// here we store data of session in mongodb and remove these data from mongodb automatically when the session expire
// ttl is expire timeof session
// here 14*24*60*60 means 14 days
// and ttl: 14*24*60*60, will we consider when we didi not given expire time in app.use(session({...}))...i.e cookie:{maxAge:200000}
// autoRemove:'native' help to remove variable from mongo after session expire
const sessionStorage = MongoStore.create({
    mongoUrl:DATABASE_URL,
    dbName:'schooldb',
    collectionName:'sessions',
    ttl: 14*24*60*60,
    autoRemove:'native'
});





// here we store the session information only on the browser (by name mysession) not variable
// when we run the server then a session will get created with the help of below properties
// below we provide storage location i.e where we have to store our session variables by store: sessionStorage
app.use(session({

    name:"mysession",
    secret:'iamkey',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:200000},
    store: sessionStorage
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
// npm i mongoose
// npm i express-session
// npm i connect-mongo

// "scripts": {
//     "dev":"nodemon app"
//   },
 
//   "type":"module"



// we canalso go on npm i connect-mongo to get more information about how we connect mongodb and sesssion
// we run server by npm run dev
// after server start go to chrome and type http://localhost:3000/examplesession
// here a session will be created in chrome you can see more information about this session in chrome->applicattion->cookies
//   here a variable also get created in mongodb 
//   we can see this variable in mongodbcompass on provided url
