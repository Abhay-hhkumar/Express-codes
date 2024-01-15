import mongoose from "mongoose";
const connectDB = async (DATABASE_URL)=>{
    try{
        const DB_OPPTIONS ={
            dbName:'school'
        }
        await mongoose.connect(DATABASE_URL,DB_OPPTIONS);
        console.log('Connection with db is successful');
    }catch(err){
        console.log(err);
    }
}

export default connectDB;