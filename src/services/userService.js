import User from "../models/User.js";
import { hashPassword } from "../utils/password.js";

const getUser = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const createUser = async (userData) => {
    try {
        const data = { ...userData };

        if (data.password) {
            data.password = await hashPassword(data.password);
        }

        return await User.create(data);
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateUser = async (id, userData) => {
    try {
        const data = { ...userData };

        // Only hash if a new password is provided
        if (data.password) {
            data.password = await hashPassword(data.password);
        }

        const user = await User.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            throw new Error("User not found");
        }

        return { message: "User deleted successfully" };
    } catch (error) {
        throw new Error(error.message);
    }
};

export default { getUser, getUserById, createUser, updateUser, deleteUser };