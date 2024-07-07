import mongoose, {Schema} from "mongoose";

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

}, {
    timestamps: true
})

export const User = mongoose.model('users', usersSchema);