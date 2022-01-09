import { startHttpInterface } from './interfaces/http'
import bcrypt from 'bcrypt'
import consola from 'consola'

async function main() {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync('password', salt)
  consola.info('bcrypt_hash: ', hash)
  startHttpInterface()
}

main()
