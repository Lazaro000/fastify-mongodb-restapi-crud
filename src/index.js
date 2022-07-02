// CommonJs
import Fastify from 'fastify';

const fastify = Fastify({
    logger: true,
});

fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' });
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
