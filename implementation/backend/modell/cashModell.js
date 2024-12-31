import mongoose, {Types} from 'mongoose';
const Schema = mongoose.Schema

const cashSchema = new Schema({
    kassenstand:{
            type: Types.Decimal128,
            required: true,
    },
})

export const Cash = mongoose.model('stands', cashSchema);