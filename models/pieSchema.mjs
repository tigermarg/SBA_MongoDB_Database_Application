//Imports
import mongoose from "mongoose";

//Create schema for pie
const pieSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true,
        unique: true,
    },
    expiration: {
        type: Date,
        min: ('2024-11-15'),
        required: true,
    },
    qty: {
        type: Number
    }

})

//Index pie flavor
pieSchema.index({flavor: 1});

//Export schema named "Pie"
export default mongoose.model('Pie', pieSchema)