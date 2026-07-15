import { Router } from "express";
import { login, logout, register, user } from "../controllers/auth.controllers.js";

const router = new Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/user', user)


export default router;