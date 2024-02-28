import login from '../../controllers/Auth/login';
import register from '../../controllers/Auth/register';
import checkJwt from '../../middlewares/checkJwt';

import type { IReply } from '$lib/shared/interfaces';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';

export default function auth(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.register(checkJwt);

  fastify.post<{ Reply: IReply }>('/login', login);
  fastify.post<{ Reply: IReply }>('/register', register);

  done();
}
