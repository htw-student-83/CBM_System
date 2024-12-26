import express from 'express';
const router = express.Router();
import serverRoutes from "../controller/serverController.js";
const { checkTCPConnection, checkLocalServer } = serverRoutes;

//Route to check the status of the lokal server
router.get('/localserver/status', checkLocalServer);

//Route to check the status of the tcp server
router.get('/tcpserver/status', checkTCPConnection);

export default router
