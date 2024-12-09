import mongoose from 'mongoose';
const Schema = mongoose.Schema

const cashSchema = new Schema({
    kassenstand:{
            type: String,
            required: true,
    },
})

export const Cash = mongoose.model('stands', cashSchema);