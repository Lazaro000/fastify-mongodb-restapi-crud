import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema(
    {
        title: String,
        price: Number,
        image: String,
        description: String,
        quantity: Number,
    },
    { timestamps: true, versionKey: false }
);

export const ProductSchema = model('Product', productSchema);
