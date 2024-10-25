//Imports
import mongoose from "mongoose";

//Create schema for pie
const pieSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true, //validation
        unique: true,   //validation
    },
    expiration: {
        type: Date,
        min: ('2024-11-15'),    //validation
        required: true, //validation
    },
    qty: {
        type: Number
    }

})

//Index pie flavor
pieSchema.index({flavor: 1});

//Export schema named "Pie"
export default mongoose.model('Pie', pieSchema)