import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    mongoUrl: process.env.MONGO_URL || "",
    jwtSecret: process.env.JWT_SECRET || ""
};

export default config;