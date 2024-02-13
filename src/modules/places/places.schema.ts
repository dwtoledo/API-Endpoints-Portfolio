import { FastifyRequest } from 'fastify'

export type PlaceAutoCompleteRequest = FastifyRequest<{
  Querystring: {
    query: string
    maxResults: number
    countryFilter: string
    culture: string
  }
}>
