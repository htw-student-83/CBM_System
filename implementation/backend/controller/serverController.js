import net from 'net';

/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const checkLocalServer = async (req, res) => {
    return res.status(200).send({msg:"hat geklappt"});
}


/**
 *
 * @param req
 * @param res
 */
const startTCPServer = (req, res) => {
    const HOST = '192.168.178.23';
    const PORT = 4000;

    const socket = net.createConnection({ port: PORT, host: HOST }, () => {
        return res.status(200).send({msg: "TCP hat geklappt"});
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