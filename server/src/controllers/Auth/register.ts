import Auth from '../../services/Auth';

import type { IUserForRegister } from '$lib/shared';
import type { FastifyRequest } from 'fastify';
import type { Reply } from '../../types/Reply';
import { CustomError } from '../../utils/Error';

export default async function register(request: FastifyRequest, reply: Reply) {
  const { first_name, last_name, email, password } =
    request.body as IUserForRegister;

  if (!first_name || !last_name || !email || !password) {
    return reply.code(400).send({
      message: 'Please provide all required fields',
    });
  }
  try {
    const user = await Auth.register({
      first_name,
      last_name,
      email,
      password,
    });

    return reply.code(201).send({ message: 'User created', data: { user } });
  } catch (error) {
    if (error instanceof CustomError) {
      if (error.statusCode === 400) {
        return reply.code(400).send({ message: error.message });
      }
    }
    return reply.code(500).send({ message: 'Internal server error' });
  }
}
