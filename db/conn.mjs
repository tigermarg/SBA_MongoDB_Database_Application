//Imports
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//Set connection string to mongoURI (env file)
const connectionString = process.env.mongoURI

//export db connection
export default async function connectDB (){
    try {
        await mongoose.connect(connectionString)

        console.log(`Mongoose DB Connected...`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}