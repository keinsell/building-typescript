// import { HTTPInteface } from './interfaces/http'
import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(5)
const hash = bcrypt.hashSync('password', salt)
console.log(hash)

// new HTTPInteface().startup()
