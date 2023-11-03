import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({},{timestamp: true})


export const Order = mongoose.model("Order", orderSchema)