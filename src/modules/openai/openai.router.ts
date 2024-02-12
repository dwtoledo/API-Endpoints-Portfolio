import { FastifyInstance } from 'fastify'
import { OpenAIController } from './openai.controller'

export async function OpenAIRouter(server: FastifyInstance) {
  server.post('/completions', OpenAIController)
}
