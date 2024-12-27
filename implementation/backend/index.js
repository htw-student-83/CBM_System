import express from 'express';
import userRoutes from "../backend/routes/userRoutes.js";
import cashRoutes from "./routes/cashRoutes.js";
import serverRoutes from "../backend/routes/serverRoutes.js";
import cors from 'cors';
import {PORT} from "./config.js";
import {connectDB} from "./db.js";

const app = express();

// Middleware
app.use(express.json());

app.use(cors());

// TCP API-Rout for server connection
app.use('/api/server', serverRoutes);

// local API-Rout for user
app.use('/api/user', userRoutes);

// API-Rout for cash
app.use('/api/cash', cashRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening on Port ${PORT}`)
})