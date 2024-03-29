import OpenAI from 'openai'
import { FastifyReply } from 'fastify'
import 'dotenv/config'

import { CompletionsRequest } from './openai.schema'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
})

export async function OpenAIService(
  request: CompletionsRequest,
  response: FastifyReply,
) {
  try {
    const content = request.body.content
    if (!content) {
      throw new Error('Prompt not informed.')
    }
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content }],
      model: 'gpt-3.5-turbo',
      temperature: 0.4,
    })
    response
      .headers({ 'Access-Control-Allow-Origin': 'http://localhost:5173' })
      .send(completion.choices[0].message.content)
  } catch (error) {
    response.code(500).send(`Chat Completions ${error}`)
  }
}
