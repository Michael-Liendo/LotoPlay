import { IReply } from '$lib/shared/interfaces';
import login from '../../controllers/Auth/login';

import type { FastifyInstance, RegisterOptions } from 'fastify';

export default function auth(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: (err?: Error | undefined) => void,
) {
  fastify.post<{ Reply: IReply }>('/login', login);

  done();
}
