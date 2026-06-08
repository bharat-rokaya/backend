import User from '../models/User.js';

const getUser = async() => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw new Error("User not found");
    }
};

const createUser = async(userData) => {
    try {
        return await User.create(userData);
    } catch(error) {
        throw new Error(error.message);
    }
}

const updateUser = async (id, userData) => {
    try {
        const user = await User.findByIdAndUpdate(id, userData, { new: true });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteUser = async (id) => {
    try {
        await User.findByIdAndDelete(id);
        return { message: 'User deleted successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
};

export default {getUser, getUserById, createUser, updateUser, deleteUser};