import type { FastifyInstance } from 'fastify';

export default function routes(
  fastify: FastifyInstance,
  _: unknown,
  done: (err?: Error | undefined) => void,
) {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  // example for other routes
  // fastify.register(auth, { prefix: "/auth" });

  done();
}
