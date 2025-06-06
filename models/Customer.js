import { model, models, Schema } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        // match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
        minLength: 1
    },
    phone: String,
    address: String,
    zipCode: Number,
    date: Date,
    products: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Customer = models?.Customer || model("Customer", customerSchema);

export default Customer