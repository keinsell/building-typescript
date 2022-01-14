import { HTTPInteface } from './interfaces/http'

import { hash } from './builds/bcrypt'
// import { relmio } from './builds/realm'

export async function main() {
	hash('password')
	// relmio()
	// new HTTPInteface().startup()
}

main()
