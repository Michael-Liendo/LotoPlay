import auth from './auth';

import type { FastifyInstance, RegisterOptions } from 'fastify';

export default function routes(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: (err?: Error | undefined) => void,
) {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  fastify.register(auth, { prefix: '/auth' });

  done();
}
