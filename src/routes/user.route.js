import { Router } from "express";
import { userRegister } from "../controllers/user.controller.js";

const router = Router()

router.route('/checkout').post(userRegister)
// router.route('/login').post(userLogin)

export default router;