import express from 'express';
import connectDB from './db/connectdb.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"
import { join } from 'path';

import web from "./routes/web.js";



connectDB(DATABASE_URL);

// static files
// now we can use files present in "public" folder
app.use('/student',express.static(join(process.cwd(), "public")));
app.use('/student/edit',express.static(join(process.cwd(), "public")));

// set template engine
app.set("view engine","ejs");

// load routes
app.use("/student",web)


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})


// npm init
// npm i nodemon
// npm i express
// npm i ejs
// npm i mongoose
// "type": "module",


// we create a partials so that we can create a single file and  use this singlie file in multiple different files 
// i.e partials file have something which common in multiple files




