import mongoose from "mongoose";

const iceCreamSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true,
        unique: true,
    },
    special: {
        type: Boolean,
    },
    gallons: {
        type: Number
    }

})

productSchema.index({flavor: 1});

export default mongoose.model('IceCream', iceCreamSchema)