//Imports
import mongoose from "mongoose";

//Create schema for ice cream 
const iceCreamSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true,
        unique: true,
    },
    seasonal: {
        type: Boolean,
    },
    gallons: {
        type: Number
    }

})

//Index ice cream flavor
iceCreamSchema.index({flavor: 1});

//Export schema named "IceCream"
export default mongoose.model('IceCream', iceCreamSchema)