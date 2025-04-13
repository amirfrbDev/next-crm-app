import mongoose from "mongoose";

export default async function connectDB() {
    try {
        if(mongoose.connections[0].readyState) return;

        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database!")
    } catch (error) {
        console.log("Couldn't Connect to Database!", error.message)
    }
}