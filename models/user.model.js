import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    createdAt: Date,
});

export const User = mongoose.model("User", userSchema);
