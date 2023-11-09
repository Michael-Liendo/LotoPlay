import * as dotenv from 'dotenv';
import Fastify from 'fastify';

import type { IUser } from '$lib/shared';

dotenv.config();

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get('/', async () => {
  return { hello: 'world' };
});

const user: IUser = {
  id: 1,
  name: 'John Doe',
  email: '',
  password: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(user);

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
