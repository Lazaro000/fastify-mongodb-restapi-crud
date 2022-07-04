import { productController } from '../controllers/product.controller.js';

const routes = [
    {
        method: 'GET',
        url: '/products',
        handler: productController.getProducts,
    },
    {
        method: 'GET',
        url: '/products/:id',
        handler: productController.getProductById,
    },
    {
        method: 'POST',
        url: '/products',
        handler: productController.saveProduct,
    },
    {
        method: 'PUT',
        url: '/products/:id',
        handler: productController.updateProduct,
    },
    {
        method: 'DELETE',
        url: '/products/:id',
        handler: productController.deleteProduct,
    },
];

export const productRoutes = routes;
