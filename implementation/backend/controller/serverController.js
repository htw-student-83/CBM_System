import net from "net";

const host = '192.168.178.23';
const port = 4000;// Ersetze dies mit der Adresse des Servers // Ersetze dies mit dem Port, den du überprüfen möchtest


/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const checkLocalServer = async (req, res) => {
    return res.sendStatus(200);
}


const checkTCPConnection = async (req, res) => {
    const socket = net.createConnection({ port, host}, () => {
        res.sendStatus(200);
        socket.end();
    });

    socket.on('error', (err) => {
        res.sendStatus(500);
        socket.destroy(); // Fehlerbehandlung
    });
};

export default {
    checkLocalServer,
    checkTCPConnection,
}