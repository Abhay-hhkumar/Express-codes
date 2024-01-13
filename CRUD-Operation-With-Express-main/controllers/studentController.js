import StudentModel from "../models/Student.js";

class StudentController {

    static createDoc = async (req,res)=>{

       try{
        const {name, age, fees}=req.body;
        const doc = new StudentModel({
            name:name,
            age:age,
            fees:fees
        });
        // saving created document
        const result = await doc.save();
        // you will get the newily created document in "result"
        // console.log(result);

         // .redirect() is same as navigate in frontend
         // here we submit the new created document and then redirect to /student page which is home page
         res.redirect("/student")

       }catch(error){
        console.log(error);
       }
       
    }

   
    static getAllDoc = async (req,res)=>{

        try{
            const result= await StudentModel.find();
            // console.log(result);
            // here we navigate to "index" page when the project get load first time
            // and by default method is "get".
            res.render("index",{data:result});

        }catch(error){
            console.log(error);
        }
        
    }

    static editDoc = async(req,res)=>{
       // here we just redirect to "edit.ejs" page
       // and send the document of the product on which we have clicked to the edit.ejs in "data"
       
        try{
             const result = await StudentModel.findById(req.params.id);
             // we will navigate to edit.ejs after click on edit button and we also send the result(i.e the document on which we have clicked is also send to edit.ejs file)
              res.render("edit",{data:result});

        }catch(error){
            console.log(error);
        }
    }

    
    static updateDocById = async (req,res)=>{
       // here when we press update button in edit.ejs page then we redirect to url /student/update/id 
       // and when the url is /student/update/id  then this function will run
       // when this funtion update teh document and  run successfully then we redirect to /student url
     

       try{
        const result= await StudentModel.findByIdAndUpdate( req.params.id, req.body);
        
        


       }catch(error){
        console.log(error);
       }
       res.redirect("/student");
       
    }

    
    static deleteDocById = async (req,res)=>{
     try{
        const result = await StudentModel.findByIdAndDelete(req.params.id);
        //  after delete the document we redirect to /student(i.e home page);
        res.redirect("/student");

     }catch(error){
        console.log(error);
     }
        
       
    }
}

export default StudentController