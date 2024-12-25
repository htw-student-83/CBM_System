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


/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const checkTCPServer = async (req, res) => {
    console.log('Funktion aufgerufen');

    const socket = new net.Socket();

    socket.connect(port, host, () => {

        console.log('Verbindung erfolgreich hergestellt');

        socket.on('error', (err) => {
            console.error('Fehler bei der Verbindung:', err);
            res.status(500).json({message: 'Verbindungsfehler'}); // Fehlerantwort an den Client
        });

        socket.on('timeout', () => {
            console.error('Verbindung timeout');
            res.status(408).json({message: 'Verbindung timed out'}); // Timeout-Antwort an den Client
        });
        socket.end()
    });
}

export default {
    checkLocalServer,
    checkTCPServer,
}