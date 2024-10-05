import { error } from "console";
import mongoose from "mongoose";

// Connection to mongodb with mongoose

const conncetMongoDB = async()=>{

    try{
       await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to mongo db');
    }
    catch{
        console.log(error);
    }
}

export default conncetMongoDB;