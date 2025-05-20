import { Router } from 'express';
import { UserController } from '../controller/UserController';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.post('/register', userController.registerUser);

export default router;
