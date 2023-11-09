import type { FastifyInstance, RouteOptions } from 'fastify';

export default function auth(
  fastify: FastifyInstance,
  _: RouteOptions,
  done: (err?: Error) => void,
) {
  // todo: add auth routes
  // fastify.post('/login', loginControllers);

  done();
}
