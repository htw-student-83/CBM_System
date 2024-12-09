import express from 'express';
const router = express.Router();
import cashRoutes from "../controller/cashController.js";
const { getCurrentStand } = cashRoutes;

//Route to get the current stand
router.get('/', getCurrentStand);

export default router
