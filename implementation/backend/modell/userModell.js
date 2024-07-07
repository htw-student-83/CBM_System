import mongoose from "mongoose";

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
    }

}, {
    timestamps: true
})

export const User = mongoose.model('user', usersSchema);