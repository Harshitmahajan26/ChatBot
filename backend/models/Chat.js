import mongoose from "mongoose";

const schema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  // User model created that is the reference type 
        required: true
    },
    latestMessage:{
        type: String,
        default: "New Chat"
    }
},
    {
        timestamps: true
    }
)


export const Chat = mongoose.model("Chat", schema)