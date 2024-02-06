import { FastifyReply } from 'fastify'
import { PlaceAutoCompleteRequest } from './models/places.auto-complete'

import axios from 'axios'
import 'dotenv/config'

export async function getPlaceAutoComplete(
  request: PlaceAutoCompleteRequest,
  response: FastifyReply,
) {
  try {
    const query = request.query.q
    const autocomplete = await axios.get(
      'http://dev.virtualearth.net/REST/v1/Autosuggest',
      {
        params: {
          query,
          maxResults: 10,
          includeEntityTypes: 'Place',
          culture: 'pt-BR',
          countryFilter: 'BR',
          key: process.env.BING_API_KEY,
        },
      },
    )
    response
      .headers({ 'Access-Control-Allow-Origin': 'http://localhost:5173' })
      .send(autocomplete.data)
  } catch (error) {
    response.code(500).send(`Places Autocomplete ${error}`)
  }
}
