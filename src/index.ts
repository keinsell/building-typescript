import { HTTPInteface } from './interfaces/http'

import { hash } from './builds/bcrypt'
import { relmio } from './builds/realm'

/* Explict require of .node binary
https://github.com/vercel/pkg/issues/1473 */

require('bcrypt/lib/binding/napi-v3/bcrypt_lib.node')

// Realm is weird but let's try it in this way for caxa build

require('realm/lib/submit-analytics.js')

export async function main() {
	hash('password')
	relmio()
	// new HTTPInteface().startup()
}

main()
