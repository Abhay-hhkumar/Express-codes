import mongoose from "mongoose";

// defining schema

const userSchema = new mongoose.Schema({

    name:{ type:String, required: true, trim:true},
    email:{type:String, required:true, trim:true,unique:true},
    password:{type:String, required:true, trim:true},
    join:{type:Date, default:Date.now}
});

// create model
const UserModel = mongoose.model('users', userSchema);

export default UserModel;