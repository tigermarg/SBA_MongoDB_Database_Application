//Imports
import mongoose from "mongoose";

//Create schema for cake
const cakeSchema = new mongoose.Schema({
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
    seasonal: {
        type: Boolean
    }

})

//Index cake flavor
cakeSchema.index({flavor: 1});

//Expore schema named "Cake"
export default mongoose.model('Cake', cakeSchema)