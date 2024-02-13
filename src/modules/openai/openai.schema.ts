import { FastifyRequest } from 'fastify'

export type CompletionsRequest = FastifyRequest<{
  Body: { content: string }
}>
