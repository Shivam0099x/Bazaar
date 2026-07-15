import { Router } from "express";
import { login, register, getUsers } from "../controllers/auth.controllers.js";

const router = new Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/users', getUsers)


export default router;