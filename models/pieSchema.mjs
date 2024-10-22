import mongoose from "mongoose";

const pieSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true,
        unique: true,
    },
    expiration: {
        type: Date,
        required: true
    },
    qty: {
        type: Number
    }

})

productSchema.index({flavor: 1});

export default mongoose.model('Pie', pieSchema)