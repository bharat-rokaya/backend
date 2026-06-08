import userService from "../services/userService.js";

const getUser = async(req, res) => {
    try {
        const user = await userService.getUser();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createUser = async(req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch(error) {
        res.status(500).send(error.message);
    }
}

const updateUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.updateUser(userId, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const result = await userService.deleteUser(userId);
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default {getUser, getUserById, createUser, updateUser, deleteUser}