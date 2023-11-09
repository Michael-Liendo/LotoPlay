import type { IncomingMessage, ServerResponse } from 'http';
import type { IReply } from '$lib/shared/interfaces';
import type {
  FastifyReply,
  FastifySchema,
  FastifyTypeProviderDefault,
  RawServerDefault,
} from 'fastify';

export type Reply = FastifyReply<
  RawServerDefault,
  IncomingMessage,
  ServerResponse<IncomingMessage>,
  {
    Reply: IReply;
  },
  unknown,
  FastifySchema,
  FastifyTypeProviderDefault
>;
