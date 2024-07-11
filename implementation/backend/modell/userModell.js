const mongoose= require('mongoose');
const Schema = mongoose.Schema

const usersSchema = new Schema({

    vorname:{
        type: String,
        required: true,
    },
    nachname:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    logged:{
        type: Boolean,
        required: true,
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('users', usersSchema);