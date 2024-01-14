import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL);

// set template engine
app.set('view engine','ejs');

// to use req.body we use below code
app.use(express.urlencoded({extended:true}));

// load routes
app.use('/',web);


app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})


// here weused bootstrap
// here we store name, email and  password (in hash format)
// there is login fesility

//...............................

/// indtalled package
//  npm i express
// npm i nodemon
// npm i ejs
// npm i mongoose
// npm i bcrypt (it use to convert our password into hash format)

// "scripts": {
//     "dev":"nodemon app"
//   },
 
//   "type":"module"

//...................................


// to make password hash format
// 1) install npm i bcrypt
// 2) import bcrypt from 'bcrypt'; in userController
// 3) write a function in userController.js
//     // static createUserDoc= async(req,res)=>{

        // .....> const hashPassword = await bcrypt.hash(req.body.password, 10)

        //     try{
        //         const doc =await UserModel({
        //                    name:req.body.name,
        //                    email:req.body.email,
        //         ......>    password:hashPassword
        //         });
      
        //         await doc.save();
    
       
        //         res.redirect('/login');
    
        //     }catch(error){
        //         console.log(err);
        //     }
        // }

//  4) now we also have to do changes in verify function
//      static verifyLogin=async(req,res)=>{
//         try{
//        
//         const { email, password}=req.body;
//         const result = await UserModel.findOne({email:email});
//        

//         if(result != null){

//           .....>  const isMatch = await bcrypt.compare(password, result.password);
//            
//        .....>     if(result.email == email && isMatch){
//                 res.send(`<h1>Dashboard ----- ${result}</h1>`)
//             }else{
//                 res.send("<h1>Email or password is not valid</h1>")
//             }
//         }else{
//             res.send("<h1>You are not registered</h1>")
//         }

//     }catch(error){
//         console.log(error);
//     }
// }






