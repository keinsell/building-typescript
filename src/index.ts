import Fastify from 'fastify'
import { openRealm } from './schema'

async function main() {
  const fastify = Fastify()

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  openRealm()

  const start = async () => {
    try {
      await fastify.listen(3000)
      console.log('Application running at http://localhost:3000')
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()
}

main()
