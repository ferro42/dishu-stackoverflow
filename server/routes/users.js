import express  from "express";
import { login, signup } from '../controllers/auth.js'
import { getallusers, updateprofile ,getuserdetail,updatelogin} from '../controllers/users.js'
import auth from '../middleware/auth.js'
import {orders, verify} from '../controllers/paymentcontroller.js'
const router = express.Router();

router.post('/orders',orders)
router.post('/verify',verify)
router.post('/signup', signup)
router.post('/login', login)
router.get('/getallusers', getallusers)
router.patch('/update/:id',auth, updateprofile)
router.patch('/updatelogin/:id',auth, updatelogin)
export default router