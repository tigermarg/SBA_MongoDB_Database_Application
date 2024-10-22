//Imports
import mongoose from "mongoose";

//Create schema for cake
const cakeSchema = new mongoose.Schema({
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
    seasonal: {
        type: Boolean
    }

})

//Index cake flavor
cakeSchema.index({flavor: 1});

//Expore schema named "Cake"
export default mongoose.model('Cake', cakeSchema)