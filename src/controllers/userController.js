import userService from "../services/userService.js";

const getUser = async(req, res) => {
    try {
        const user = await userService.getUser();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Failed to fetch users' });
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid User ID' });
        }

        const product = await userService.getUserById(userId);
        if (!product) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch User' });
    }
};

const createUser = async(req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch(error) {
        res.status(500).json({ error: error.message || 'Failed to create user' });
    }
}

export default {getUser, getUserById, createUser}