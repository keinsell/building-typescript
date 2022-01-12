import { HTTPInteface } from './interfaces/http'
import bcrypt from 'bcrypt'
import realm from 'realm'
import path from 'path'

require('bcrypt/lib/binding/napi-v3/bcrypt_lib.node')

export interface User extends realm.Object {
	id: string
}

export const UserSchema: realm.ObjectSchema = {
	name: 'User',
	properties: {
		id: {
			type: 'string',
			optional: false,
		},
	},
	primaryKey: 'id',
}

export async function main() {
	const salt = bcrypt.genSaltSync(5)
	const hash = bcrypt.hashSync('password', salt)
	console.log(hash)

	const r = await realm.open({
		path: path.join(__dirname, 'db', 'db.realm'),
		schema: [UserSchema],
	})

	r.close()

	new HTTPInteface().startup()
	return hash
}

main()
