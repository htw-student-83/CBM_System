import express from 'express';
import net from 'net';
import { connectDB} from "./db.js";
import { PORT } from "./config.js";
import userRoutes from "../backend/routes/userRoutes.js"
import cashRoutes from "./routes/cashRoutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/user', userRoutes);

app.use('/api/cash', cashRoutes);

app.listen(4000, () =>{
    connectDB();
    console.log(`Server stated on http://localhost:${PORT}/api/user`);
})