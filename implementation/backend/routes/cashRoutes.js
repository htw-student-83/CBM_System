import express from 'express';
const router = express.Router();
import cashRoutes from "../controller/cashController.js";
const { getCurrentStand, payment, payout } = cashRoutes;

//Route to get the current stand
router.get('/', getCurrentStand);

//Route to pay something
router.patch('/payment/', payment);

//Route to payout something
router.patch('/payout/', payout);

export default router
