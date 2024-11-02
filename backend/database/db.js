import mongoose from "mongoose";

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.Db_url, {
            dbName: "ChatBotHarshit"
        })

        console.log("MongoDb connected")
        
    } catch (error) {
        console.log(error) 
    }
}

export default connectDb
