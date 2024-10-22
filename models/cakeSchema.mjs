import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true,
        unique: true,
    },
    expiration: {
        type: Date,
        required: true
    },
    special: {
        type: Boolean
    }

})

productSchema.index({flavor: 1});

export default mongoose.model('Cake', cakeSchema)