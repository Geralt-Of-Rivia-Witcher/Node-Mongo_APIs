import mongoose from "mongoose";

var adminSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
});

export const Admin = mongoose.model("Admin", adminSchema);
