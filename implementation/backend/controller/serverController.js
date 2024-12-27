import express from 'express';
import net from 'net';

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
    // Versuchen, eine Verbindung zum TCP-Server herzustellen
    const socket = net.createConnection({ port: PORT, host: HOST }, () => {
        res.status(200).send('TCP-Verbindung erfolgreich!');
        socket.end();  // Verbindung schließen
    });

    // Wenn ein Fehler auftritt, sende Status 500 (Fehler) zurück
    socket.on('error', (err) => {
        console.error('Fehler bei der TCP-Verbindung:', err.message);
        res.status(500).send('Fehler bei der TCP-Verbindung');
    });
};

app.listen(PORT, () => {
    console.log(`HTTP-Server läuft auf http://localhost:${PORT}`);
});

export default {
    checkLocalServer,
    startTCPServer
}