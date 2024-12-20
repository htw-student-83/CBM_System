import express from 'express';
const router = express.Router();
import cashRoutes from "../controller/cashController.js";
const { getCurrentStand, updateCurrentCash } = cashRoutes;

//Route to get the current stand
router.get('/', getCurrentStand);

//Route to update the current stand of cash
router.patch('/change/', updateCurrentCash);

export default router
