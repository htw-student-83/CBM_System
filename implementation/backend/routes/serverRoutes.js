import express from 'express';
const router = express.Router();
import serverRoutes from "../controller/serverController.js";
const { startTCPServer, checkLocalServer } = serverRoutes;

//Route to check the status of the lokal server
router.get('/localserver', checkLocalServer);

//Route to check the status of the tcp server
router.get('/tcpserver', startTCPServer);

export default router
