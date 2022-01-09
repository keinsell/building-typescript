import { startHttpInterface } from './interfaces/http'
import bcrypt from 'bcrypt'
import consola from 'consola'

/* https://github.com/vercel/pkg/issues/283 */
require('./utils/natives.ts')

async function main() {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync('password', salt)
  consola.info('bcrypt_hash: ', hash)
  startHttpInterface()
}

main()
