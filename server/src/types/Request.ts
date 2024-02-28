import { IUser } from '$lib/shared/interfaces';
import type { FastifyRequest } from 'fastify';

export interface Request extends FastifyRequest {
  user?: IUser;
}
