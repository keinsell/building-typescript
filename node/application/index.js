import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'

const app = new App()

export async function startHttpService() {
	app.use(logger())
		.get('/', (_, res) => void res.send('<h1>Hello World</h1>'))
		.get('/page/:page/', (req, res) => {
			res.status(200).send(`
    <h1>Some cool page</h1>
    <h2>URL</h2>
    ${req.url}
    <h2>Params</h2>
    ${JSON.stringify(req.params, null, 2)}
    <h2>Node-native Encryption</h2>
    ${'s'}
  `)
		})
		.listen(3000)
}
