import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"

// connect database
connectDB(DATABASE_URL);

// json converter (without this we cannot convart the data sent by user from react frontend)
// data come to server always in json format
// and we have convert this json data into normal format to use in server
// to do this conversion we use below line
app.use(express.json());


// load routes
app.use("/student", web);

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})


// what we do in the project
// we create user(name,age,fees)
// we get all users
// we get single user
// we update documentof user
// we delete user

/// npm init
// npm i express
// npm i nodemon
// npm i mongoose
// 



// steps
/// install package
// then update package.json
// then connect database
// then create app.js file
// then create schema
// then create controller
// then create routes in web.js
// then import web in app.js(to load routes);

// we use this api using postman
// now the data given by user in the form is in the fom of json
// to assess json file we install json middleware insted of urlencoded middleware
// to do this we use app.use(express.json()); in app.js
