import Realm, { ObjectSchema } from 'realm'
import path from 'path'

export const UserSchema: ObjectSchema = {
  name: 'User',
  properties: {
    username: {
      type: 'string',
      optional: false,
    },
  },
  primaryKey: 'username',
}

export async function openRealm() {
  const realm = await Realm.open({ path: path.join(__dirname, 'db', 'db.realm'), schema: [UserSchema] })
  return realm
}
