import express from 'express';
import { connectDB} from "./db.js";
import { PORT } from "./config.js";
import userRoutes from "../backend/routes/userRoutes.js"
import cashRoutes from "./routes/cashRoutes.js";
import serverRoutes from "../backend/routes/serverRoutes.js"
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

//API for server routes
app.use('/api/server', serverRoutes);

//API for user routes
app.use('/api/user', userRoutes);

//API for cash routes
app.use('/api/cash', cashRoutes);

app.listen(4000, () =>{
    connectDB();
    console.log(`Server stated on http://localhost:${PORT}/api`);
})