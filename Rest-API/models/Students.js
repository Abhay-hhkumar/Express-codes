import mongoose from "mongoose";

// define schema
const studentSchema = new mongoose.Schema({
    name: {type:String, required:true, trim:true},
    age:{type:Number, required:true},
    fees:{type:mongoose.Decimal128, required:true, validate:(value)=> value >= 5000 }
});

// create model
const StudentModel = mongoose.model("students", studentSchema);


export default StudentModel;