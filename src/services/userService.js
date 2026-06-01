import User from '../models/User.js';

const getUser = async() => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const createUser = async(userData) => {
    try {
        return await User.create(userData);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

export default {getUser, getUserById, createUser};