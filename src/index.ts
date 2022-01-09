import Fastify from 'fastify'
import consola from 'consola'

async function main() {
  const fastify = Fastify()

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  const start = async () => {
    try {
      await fastify.listen(3000)
      consola.success('Application running at http://localhost:3000')
    } catch (err) {
      consola.error(err)
      process.exit(1)
    }
  }
  start()
}

main()
