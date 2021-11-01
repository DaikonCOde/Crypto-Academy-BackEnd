import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const serviceSchema = new Schema({
    name: String,
    date: Date,
    costMin: Number,
    benefit: String,
    business: String,
    payments: String,
    thumb: String,
})

export const Service = model('Service', serviceSchema)

