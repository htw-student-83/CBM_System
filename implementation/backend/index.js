import express from 'express';
import { PORT } from './configuration.js';

const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})