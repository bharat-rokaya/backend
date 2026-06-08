import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (userData) => {
    try {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            throw new Error("Email already in use");
        }   
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await User.create({ ...userData, password: hashedPassword });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const login = async (credentials) => {
    try {
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
};

export { register, login };