import express from 'express';
import {sendReseravtion} from '../controller/reservation.js'
const router = express.Router();

router.post("/send", sendReseravtion)
export default router;