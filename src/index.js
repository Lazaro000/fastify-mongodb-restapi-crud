// CommonJs
import Fastify from 'fastify';
import { productRoutes } from './routes/products.routes.js';
import { mongodb } from './utils/mongodb.js';
import * as swagger from '@fastify/swagger';
import { swaggerOptions } from './utils/swagger.js';
import * as fs from 'fs';

const fastify = Fastify({
    logger: true,
});

await mongodb();

await fastify.register(swagger, swaggerOptions);

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

        fastify.swagger();

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

/**
 * Create swagger local file
 */
const yaml = fastify.swagger({ yaml: true });
fs.writeFileSync('./swagger.yml', yaml);
