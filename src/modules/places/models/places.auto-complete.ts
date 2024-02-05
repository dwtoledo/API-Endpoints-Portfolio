import { FastifyRequest } from 'fastify'

export type PlaceAutoCompleteRequest = FastifyRequest<{
  Querystring: { q: string }
}>
