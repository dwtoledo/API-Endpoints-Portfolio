import { FastifyReply, FastifyRequest } from 'fastify'
import { OpenAIService } from './openai.service'

export async function OpenAIController(
  request: FastifyRequest,
  response: FastifyReply,
) {
  return await OpenAIService(request, response)
}
