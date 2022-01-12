// import { HTTPInteface } from './interfaces/http'
import bcrypt from 'bcrypt'
import path from 'path'

require('bcrypt/lib/binding/napi-v3/bcrypt_lib.node')

const salt = bcrypt.genSaltSync(5)
const hash = bcrypt.hashSync('password', salt)
console.log(hash)

// new HTTPInteface().startup()
