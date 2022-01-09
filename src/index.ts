import { startHttpInterface } from './interfaces/http'
import bcrypt from 'bcrypt'
import consola from 'consola'

// Explict Fixes of Code for Binary Compilation
require('bcrypt/lib/binding/napi-v3/bcrypt_lib.node')

async function main() {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync('password', salt)
  consola.info('bcrypt_hash: ', hash)
  startHttpInterface()
}

main()
