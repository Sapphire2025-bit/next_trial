import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI || "";

const connect = async () => {
    try{
        console.log('data: ',MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.log("Mongodb connection successfull!!");
    } catch (error) {
        throw new Error("Error in connecting to mongoDB. " + error);
    }
};

export default connect;