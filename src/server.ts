import Fastify from 'fastify'
import { PlacesRouter } from './modules/places/places.router'

const server = Fastify({
  logger: true,
})

server.get('/healthcheck', async () => {
  return { status: 'OK' }
})

const start = async () => {
  server.register(PlacesRouter, { prefix: 'api/places' })

  try {
    await server.listen({ port: 3333, host: '0.0.0.0' })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
