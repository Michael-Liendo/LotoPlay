import type { FastifyRequest } from 'fastify';
import type { Reply } from '../../types/Reply';
import type { IUserForLogin } from '$lib/shared';

export default async function login(request: FastifyRequest, reply: Reply) {
  const { email, password } = request.body as IUserForLogin;

  reply.code(200).send({
    message: 'Hello, world!',
    data: { user: { name: 'John Doe', email, password } },
  });
}
