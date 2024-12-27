import express from 'express';
import net from 'net';
import {connectDB} from "../db.js";

const app = express();
const HOST = '192.168.178.23';
const PORT = 4000;

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const checkLocalServer = async (req, res) => {
    return res.sendStatus(200);
}


/**
 *
 * @param req
 * @param res
 */
const startTCPServer = (req, res) => {
      const socket = net.createConnection({ port: PORT, host: HOST }, () => {
        return res.sendStatus(200);
    });

    // Wenn ein Fehler auftritt, sende Status 500 (Fehler) zurück
    socket.on('error', (err) => {
        console.error('Fehler bei der TCP-Verbindung:', err.message);
        res.status(500).send('Fehler bei der TCP-Verbindung');
    });
};

export default {
    checkLocalServer,
    startTCPServer
}