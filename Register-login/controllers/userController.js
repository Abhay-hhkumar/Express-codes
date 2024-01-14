import UserModel from "../models/User.js";
import bcrypt from 'bcrypt';

class UserController {
    static home=(req,res)=>{
        res.render("index");
    }

    // create doucment and store email and password(without hash format)
    // static createUserDoc= async(req,res)=>{
    //     try{
    //         const doc =await UserModel({
    //             name:req.body.name,
    //             email:req.body.email,
    //             password:req.body.password
    //         });
    //         // save document 
    //         await doc.save();

    //         // redirect to login page after we get loggedin
    //         res.redirect('/login');

    //     }catch(error){
    //         console.log(err);
    //     }
    // }


    // // create doucment and store email and password(with hash format) *.*
    static createUserDoc= async(req,res)=>{

        // here 10 is saltRounds to make password more strong
        const hashPassword = await bcrypt.hash(req.body.password, 10)

            try{
                const doc =await UserModel({
                    name:req.body.name,
                    email:req.body.email,
                    password:hashPassword
                });
                // save document 
                await doc.save();
    
                // redirect to login page after we get loggedin
                res.redirect('/login');
    
            }catch(error){
                console.log(err);
            }
        }

    // do registration
    static registration=(req,res)=>{
        res.render("registration");
    }

    // do login
    static login=(req,res)=>{
        res.render("login");
    }


    // verify login without hash password
    // static verifyLogin=async(req,res)=>{
    //     try{
    //         // we get the data typed by user in the input field
    //         // and then find the document by this email
    //         // if we get the document in the data base whose email is same as user entered in input field
    //         // then we print the document and redirect to home page

    //         // note while destructure our variable names in braces { email, password} shoul dbe same as we given from frontend i.e name="email" in  <input type="email" class="form-control" id="email" name="email" required />
    //         const { email, password}=req.body;
    //         const result = await UserModel.findOne({email:email});
    //         // console.log(result)

    //         // here if user is not registered and try to login then we get null in 'result'

    //         if(result != null){
    //             if(result.email == email && result.password == password){
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


    // verify login with hash password
    static verifyLogin=async(req,res)=>{
        try{
            // we get the data typed by user in the input field
            // and then find the document by this email
            // if we get the document in the data base whose email is same as user entered in input field
            // then we print the document and redirect to home page

            // note while destructure our variable names in braces { email, password} shoul dbe same as we given from frontend i.e name="email" in  <input type="email" class="form-control" id="email" name="email" required />
            const { email, password}=req.body;
            const result = await UserModel.findOne({email:email});
            // console.log(result)

            // here if user is not registered and try to login then we get null in 'result'

            if(result != null){

                // password is the password user enter in input field
                // result.password is the hashed password present in mongodb database..
                // here we compare the entered password and mongodb hashed password
                const isMatch = await bcrypt.compare(password, result.password);
                // if password is match successfully then we isMatch is true otherwise isMatch is false
                if(result.email == email && isMatch){
                    res.send(`<h1>Dashboard ----- ${result}</h1>`)
                }else{
                    res.send("<h1>Email or password is not valid</h1>")
                }
            }else{
                res.send("<h1>You are not registered</h1>")
            }

        }catch(error){
            console.log(error);
        }
    }

    
}

export default UserController;