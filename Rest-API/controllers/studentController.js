import StudentModel from "../models/Students.js";

class StudentController {
    static createDoc=async (req,res)=>{
        try{

            // const {name, age, fees}=req.body;
            // const doc = new StudentModel({
            //     name:name,
            //     age:age,
            //     fees:fees
            // });

            // we can also write 
            const doc = new StudentModel(req.body);
            const result = await doc.save();
            res.status(201).send(result);
        }catch(error){
            console.log(error);
        }
        
    }

    // get all document
    static getAllDoc=async (req,res)=>{
        try{
            const result = await StudentModel.find();
            res.send(result);

        }catch(error){
            console.log(error);
        }
    }

    // get single documnet By ID
    static getSingleDOcById= async (req,res)=>{
        try{
            const result = await StudentModel.findById(req.params.id);
            res.send(result);

        }catch(error){
            console.log(error);
        }
    }

    // update doc by id
    static updateDocById=async(req,res)=>{
        try{

            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(result);
        }catch(error){
            console.log(error);
        }
    }

    // delete doc by id
    static deleteDocById=async(req,res)=>{
        try{

            // findByIdAndDelete(req.params.id) we mostly write object inside the () and req.params.id is a object
            const result =await StudentModel.findByIdAndDelete(req.params.id);
            res.status(204).send(result);
        }catch(error){
            console.log(error);
        }
       
    }
}

export default StudentController;