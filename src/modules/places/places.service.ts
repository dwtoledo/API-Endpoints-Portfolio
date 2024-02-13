import { FastifyReply } from 'fastify'

import axios from 'axios'
import 'dotenv/config'
import { PlaceAutoCompleteRequest } from './places.schema'

export async function getPlaceAutoComplete(
  request: PlaceAutoCompleteRequest,
  response: FastifyReply,
) {
  try {
    const query = request.query.query || ''
    const maxResults = request.query.maxResults || 10
    const culture = request.query.culture || 'pt-BR'
    const countryFilter = request.query.countryFilter || 'BR'

    const autocomplete = await axios.get(
      'http://dev.virtualearth.net/REST/v1/Autosuggest',
      {
        params: {
          query,
          maxResults,
          culture,
          countryFilter,
          includeEntityTypes: 'Place',
          key: process.env.BING_API_KEY,
        },
      },
    )
    response
      .headers({ 'Access-Control-Allow-Origin': 'http://localhost:5173' })
      .send(autocomplete.data.resourceSets[0].resources[0].value)
  } catch (error) {
    response.code(500).send(`Places Autocomplete ${error}`)
  }
}
