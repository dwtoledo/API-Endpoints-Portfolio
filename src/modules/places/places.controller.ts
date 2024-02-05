import { FastifyReply } from 'fastify'
import { getPlaceAutoComplete } from './places.service'
import { PlaceAutoCompleteRequest } from './models/places.auto-complete'

export async function placeAutoCompleteHandler(
  request: PlaceAutoCompleteRequest,
  response: FastifyReply,
) {
  return await getPlaceAutoComplete(request, response)
}
