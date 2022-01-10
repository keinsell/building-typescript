import { exec } from 'child_process'

const dev = exec('ts-node-dev --respawn --transpile-only --cls --quiet --deps src/index.ts')

dev.stdout.on('data', function (data) {
	console.log(data.toString())
})

dev.stderr.on('data', function (data) {
	console.log(data.toString())
})

dev.on('exit', function (code) {
	console.log('program ended with code: ' + code)
})
