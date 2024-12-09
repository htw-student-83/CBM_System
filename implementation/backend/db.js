import mongoose from 'mongoose';
import { MONGO_URL} from "./config.js";

export const connectDB = async() =>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log(`Connected with the MongoDB`);
    }catch (error)  {
        console.error('error: ${error.message}');
        process.exit(1);
    }
}