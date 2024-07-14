require('dotenv').config();
const express = require('express');
const net = require('net');
const mongoose = require('mongoose');
const userRoutes = require('../backend/routes/userRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

//app.use('/api/user/', userRoutes);
app.use('/api/', userRoutes);
//app.use('/api/cashbox/', userRoutes);

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to the CBM-System");
})

mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>{
            app.listen(process.env.PORT, () => {
                console.log(`Server is listening on port ${process.env.PORT}`);
            })
            console.log("Connected with the db cash-box-system")
        })
        .catch((error) => {
            console.log(error);
        })

