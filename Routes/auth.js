import express from 'express';
import { signup } from '../Controllers/Authentication/signup.js';
import { login } from '../Controllers/Authentication/login.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);

export default router;
