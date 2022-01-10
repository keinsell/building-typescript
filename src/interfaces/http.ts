import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import consola from 'consola'

async function helloController(req: FastifyRequest, res: FastifyReply) {
	consola.info('GET /')
	res.send({ hello: 'world' })
}

export class HTTPInteface {
	public fastify: FastifyInstance = Fastify()

	constructor() {
		this.routes()
	}

	routes() {
		this.fastify.get('/', helloController)
	}

	async startup() {
		try {
			await this.fastify.listen(3000)
			consola.success('Application running at http://localhost:3000')
		} catch (err) {
			consola.error(err)
			process.exit(1)
		}
	}
}
