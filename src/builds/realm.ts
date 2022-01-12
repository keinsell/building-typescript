import realm from 'realm'
import path from 'path'

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

export async function relmio() {
	const r = await realm.open({
		path: path.join(__dirname, 'db', 'db.realm'),
		schema: [UserSchema],
	})

	if (!r.isClosed) console.log('Realm connection open!')

	r.close()
}
