import { hash } from './builds/bcrypt'
import { slite } from './builds/sqlite'
// import { relmio } from './builds/realm'

/* I cannot into pkg.assets configuration */
require('bcrypt/lib/binding/napi-v3/bcrypt_lib.node')
require('sqlite3/lib/binding/**/node_sqlite3.node')

export async function main() {
	hash('password')
	slite()
}

main()
