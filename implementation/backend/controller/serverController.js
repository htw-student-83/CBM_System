/**
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */


const checkLocalServer = async (req, res) => {
    return res.sendStatus(200);
}

/*
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

 */

import net from 'net';

const TCP_HOST = '192.168.178.23';  // IP-Adresse des Servers
const TCP_PORT = 4000;              // TCP-Port für den Server

// Funktion zum Starten des TCP-Servers
const startTCPServer = () => {
    const server = net.createServer((socket) => {
        console.log('Neue TCP-Verbindung');
        socket.write('Verbindung erfolgreich!\n');
        socket.on('data', (data) => {
            console.log('Nachricht vom Client:', data.toString());
        });
        socket.on('end', () => {
            console.log('Verbindung geschlossen');
        });
    });

    server.listen(TCP_PORT, TCP_HOST, () => {
        console.log(`TCP-Server läuft auf ${TCP_HOST}:${TCP_PORT}`);
    });

    server.on('error', (err) => {
        console.error('Fehler im TCP-Server:', err.message);
    });
};

// Server starten


export default {
    checkLocalServer,
    startTCPServer
}