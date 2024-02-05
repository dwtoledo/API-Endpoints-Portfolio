import { FastifyInstance } from 'fastify'
import { placeAutoCompleteHandler } from './places.controller'

export async function PlacesRouter(server: FastifyInstance) {
  server.get(
    '/autocomplete',
    { schema: { querystring: { q: { type: 'string' } } } },
    placeAutoCompleteHandler,
  )
}
