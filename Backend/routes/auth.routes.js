import { Router } from "express";
import { login, register, getUsers, logout } from "../controllers/auth.controllers.js";
import {protect} from '../middlewares/auth.middleware.js'
import { admin } from "../middlewares/admin.middleware.js";

const router = new Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/users', protect,admin, getUsers)


export default router;