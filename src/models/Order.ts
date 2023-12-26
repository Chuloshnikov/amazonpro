import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    clientName: {
        type: String, required: true, maxlength: 60
    },
    clientEmail: {
        type: String, required: true, maxlength: 60
    },
    status: {
        type: Number, default: 0,
    },
    productData: {
        type:[{
            brand: {
                type: String,
                required: true,
                maxlength: 60,
            },
            category: {
                type: String,
                required: true,
                maxlength: 60,
            },
            description: {
                type: String,
                required: true,
                maxlength: 1000,
            },
            image: {
                type: String,
                required: true,
            },
            isNew: {
                type: Boolean,
                default: false,
            },
            previousPrice: {
                type: Number,
                required: false,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
                maxlength: 60,
            },
            _id: {
                type: Number,
                required: true,
            },
        }]
    },
}, { timestamps: true, suppressReservedKeysWarning: true }
);


export default mongoose.models.Order || mongoose.model("Order", OrderSchema);