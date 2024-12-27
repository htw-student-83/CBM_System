import express from 'express';
import { connectDB } from "./db.js";
import { PORT } from "./config.js";
import userRoutes from "../backend/routes/userRoutes.js";
import cashRoutes from "./routes/cashRoutes.js";
import serverRoutes from "../backend/routes/serverRoutes.js";
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// TCP API-Rout for server connection
app.use('192.168.178.23:4000/api/server', serverRoutes);

// TCP API-Rout for user methods
app.use('192.168.178.23:4000/api/user', userRoutes);

// TCP API-Rout for cash methods
app.use('192.168.178.23:4000/api/cash', cashRoutes);

// local API-Rout for user
app.use('/api/user', userRoutes);

// API-Rout for cash
app.use('/api/cash', cashRoutes);

// Server für lokale und externe Verbindungen starten
const startServer = (port, host) => {
    app.listen(port, host, () => {
        console.log(`🚀 Server läuft auf http://${host}:${port}`);
        connectDB();
    }).on('error', (err) => {
        console.error(`❌ Fehler beim Start auf ${host}:${port} - ${err.message}`);
    });
};

// Starte Server auf localhost und im Netzwerk
const port = PORT || 4000;
//startServer(port, 'localhost');  // Lokal
//startServer(port, '0.0.0.0');    // Netzwerk (externe IP)
