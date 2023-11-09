import login from '../../controllers/Auth/login';
import register from '../../controllers/Auth/register';

import type { IReply } from '$lib/shared/interfaces';
import type { FastifyInstance, RegisterOptions } from 'fastify';

export default function auth(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: (err?: Error | undefined) => void,
) {
  fastify.post<{ Reply: IReply }>('/login', login);
  fastify.post<{ Reply: IReply }>('/register', register);

  done();
}
