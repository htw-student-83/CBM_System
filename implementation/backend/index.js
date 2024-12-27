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

// API-Routen
app.use('/api/server', serverRoutes);
app.use('/api/user', userRoutes);
app.use('/api/cash', cashRoutes);

// Testroute
app.get('/', (req, res) => {
    res.send('Server läuft!');
});

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
startServer(port, 'localhost');  // Lokal
startServer(port, '0.0.0.0');    // Netzwerk (externe IP)
