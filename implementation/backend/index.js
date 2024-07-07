import express from 'express';
import { PORT } from './configuration.js';
//THWbROdEiZXzpvCJ
const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to the CBM-System");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})