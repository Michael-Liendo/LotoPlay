import fastifyPlugin from 'fastify-plugin';
import { UnauthorizedError } from '../utils/errorHandler';
import { Jwt } from '../utils/jwt';
import type { DoneFuncWithErrOrRes, FastifyInstance } from 'fastify';
import { Request } from '../types';
import Services from '../services';

function getUser(fastify: FastifyInstance, _, done: DoneFuncWithErrOrRes) {
  fastify.decorateRequest('user', null);

  fastify.addHook('preHandler', checkJwt);
  done();
}

async function checkJwt(request: Request) {
  const token = request.headers.authorization;

  if (!token) {
    throw new UnauthorizedError('Access denied Jwt is required');
  }

  try {
    const jwt = token.split(' ').pop();
    const payload = Jwt.verifyToken(`${jwt}`);
    const user = await Services.user.getByID(payload.id);

    request.user = user;
  } catch (error) {
    throw new UnauthorizedError(error);
  }
}

export default fastifyPlugin(getUser);
