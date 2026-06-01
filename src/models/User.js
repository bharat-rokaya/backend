import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username is required."],
        minLength: [3, "Username should be at least 3 characters."],
        maxLength: [20, "Username max characters is 20."],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "E-mail is required."],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minLength: [6, "Password must contain at least 6 characters."],
        maxLength: [25, "Password should be less than 25 characters."],
    },
    city: String,
    province: String,
    country:{
            type: String,
            default: "Nepal",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    role: {
        enum: ["USER", "MERCHANT", "ADMIN", "SUPER_ADMIN"],
        type: String,
        default: "USER",
    },
});

export default mongoose.model("User", userSchema); 