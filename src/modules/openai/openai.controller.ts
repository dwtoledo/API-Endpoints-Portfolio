import { FastifyReply } from 'fastify'
import { OpenAIService } from './openai.service'
import { CompletionsRequest } from './openai.schema'

export async function OpenAIController(
  request: CompletionsRequest,
  response: FastifyReply,
) {
  return await OpenAIService(request, response)
}
