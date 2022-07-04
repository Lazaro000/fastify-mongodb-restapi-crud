// CommonJs
import Fastify from 'fastify';
import { productRoutes } from './routes/products.routes.js';
import { mongodb } from './utils/mongodb.js';

const fastify = Fastify({
    logger: true,
});

await mongodb();


/**
 * Routes
 */
productRoutes.forEach((route) => {
    fastify.route(route);
});

/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });

        fastify.log.info(
            `Server listening on ${fastify.server.address().port}`
        );
    } catch (err) {
        console.log(`--- ERROR CATCH ---`);
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
