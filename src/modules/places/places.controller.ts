import { FastifyReply } from 'fastify'
import { getPlaceAutoComplete } from './places.service'
import { PlaceAutoCompleteRequest } from './places.schema'

export async function placeAutoCompleteHandler(
  request: PlaceAutoCompleteRequest,
  response: FastifyReply,
) {
  return await getPlaceAutoComplete(request, response)
}
