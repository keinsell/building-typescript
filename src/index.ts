// import { HTTPInteface } from './interfaces/http'
import bcrypt from 'bcrypt'
import path from 'path'
import natives from 'nexe-natives'

natives(require.resolve('bcrypt'), {
	localPath: path.join(__dirname, 'natives'),
	removeOnExit: false,
})

// require('node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node')

const salt = bcrypt.genSaltSync(5)
const hash = bcrypt.hashSync('password', salt)
console.log(hash)

// new HTTPInteface().startup()
