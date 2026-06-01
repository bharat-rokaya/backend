import express from 'express';
import userController from "../controllers/userController.js";

const router = express.Router();

router.get('/', userController.getUser);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);


export default router;