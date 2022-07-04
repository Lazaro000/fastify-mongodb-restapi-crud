import { ProductSchema as Product } from '../models/product.model.js';

class ProductController {
    getProducts = async (req, reply) => {
        try {
            const products = await Product.find();

            reply.code(200).send(products);
        } catch (err) {}
    };

    getProductById = async (req, reply) => {
        try {
            const product = await Product.findById(req.params.id);

            reply.code(200).send(product);
        } catch (err) {}
    };

    saveProduct = async (req, reply) => {
        try {
            const product = new Product(req.body);

            await product.save();

            reply.code(201).send(product);
        } catch (err) {}
    };

    updateProduct = async (req, reply) => {
        try {
            const product = await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );

            reply.code(200).send(product);
        } catch (err) {}
    };

    deleteProduct = async (req, reply) => {
        try {
            await Product.findByIdAndDelete(req.params.id);

            reply.code(204).send();
        } catch (err) {}
    };
}

export const productController = new ProductController();
