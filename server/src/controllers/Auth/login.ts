import type { IUserForLogin } from '$lib/shared';
import type { FastifyRequest } from 'fastify';
import Auth from '../../services/Auth';
import type { Reply } from '../../types/Reply';

export default async function login(request: FastifyRequest, reply: Reply) {
  const { email, password } = request.body as IUserForLogin;

  const user = await Auth.login({ email, password });

  if (user instanceof Error) {
    return reply.code(401).send({ message: user.message });
  }

  reply.code(200).send({ message: 'Login successful', data: user });
}
