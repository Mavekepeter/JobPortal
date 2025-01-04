import mongoose from "mongoose";
//function toconnect to the mongodb Database
const connectDB = async()=>{
    mongoose.connection.on('connected',()=>console.log('Database connected'));
    
    await mongoose.connect(`${process.env.MONGODB_URL}/job-portal`)
}
export default connectDB;