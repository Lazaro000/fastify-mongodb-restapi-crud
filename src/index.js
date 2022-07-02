import Fastify from 'fastify';

const fastify = Fastify({
    logger: true,
});

const start = async () => {
    await fastify.listen(3000);

    fastify.log.info(`Server listening on ${fastify.server.addres().port}`);
};

start();
