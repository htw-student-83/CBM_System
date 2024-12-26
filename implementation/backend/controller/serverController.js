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
    net.createConnection({ port, host}, () => {
        return res.sendStatus(200);
    });
};

export default {
    checkLocalServer,
    checkTCPConnection,
}