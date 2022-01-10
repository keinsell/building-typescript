import { exec } from 'child_process'

function consa(command) {
	exec(command, (err, stdout, stderr) => {
		if (err) throw err
		console.log(stdout)
		// stdout.on('data', function (data) {
		// 	console.log(data.toString())
		// })
	})
}

const tsc = exec('tsc -p tsconfig.json')

tsc.stdout.on('data', function (data) {
	console.log(data.toString())
})

tsc.stderr.on('data', function (data) {
	console.log(data.toString())
})

tsc.on('exit', function (code) {
	console.log('program ended with code: ' + code)
})

const ncc = exec('ncc build src/index.ts -a -s -m -o dist/ncc --stats-out dist/ncc/stats.json')

ncc.stdout.on('data', function (data) {
	console.log(data.toString())
})

ncc.stderr.on('data', function (data) {
	console.log(data.toString())
})

ncc.on('exit', function (code) {
	console.log('program ended with code: ' + code)
})

const pkg = exec('pkg . --compress Brotli -o dist/pkg/ttb -d --public-packages "*"')

pkg.stdout.on('data', function (data) {
	console.log(data.toString())
})

pkg.stderr.on('data', function (data) {
	console.log(data.toString())
})

pkg.on('exit', function (code) {
	console.log('program ended with code: ' + code)
})
