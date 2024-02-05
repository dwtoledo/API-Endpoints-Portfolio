import { FastifyReply } from 'fastify'
import { PlaceAutoCompleteRequest } from './models/places.auto-complete'

import axios from 'axios'
import 'dotenv/config'

export async function getPlaceAutoComplete(
  request: PlaceAutoCompleteRequest,
  response: FastifyReply,
) {
  try {
    const input = request.query.q
    const autocomplete = await axios.get(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      {
        params: {
          input,
          types: '(cities)',
          language: 'pt_BR',
          components: 'country:BR',
          key: process.env.GOOGLE_API_KEY,
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
