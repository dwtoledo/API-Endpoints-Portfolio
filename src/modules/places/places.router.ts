import { FastifyInstance } from 'fastify'
import { placeAutoCompleteHandler } from './places.controller'

export async function PlacesRouter(server: FastifyInstance) {
  server.get(
    '/autocomplete',
    {
      schema: {
        querystring: {
          query: { type: 'string' },
          maxResults: { type: 'number' },
          countryFilter: { type: 'string' },
          culture: { type: 'string' },
        },
      },
    },
    placeAutoCompleteHandler,
  )
}
