import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database is connected!!");
    } catch(err) {
        console.log(err.message);
    }
}

export default connectdb;