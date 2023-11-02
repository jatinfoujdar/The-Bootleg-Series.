import mongoose, { Schema } from "mongoose";


const subTodoSchema = new Schema({

    content:{
        type: String,
        required: true,
    },
    compelte: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {timestamps:true})



export const subTodo = mongoose.model("SubTodo",subTodoSchema)