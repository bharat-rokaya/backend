import jwt from "jsonwebtoken";
import config from "../config/config.js";

const createToken = (data) => {
    return jwt.sign(data, config.jwtSecret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecret);
};

export default { createToken, verifyToken };