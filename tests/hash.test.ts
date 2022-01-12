import test from 'ava'
import bcrypt from 'bcrypt'

console.log = function () {}

import { hash } from '../src/builds/bcrypt'

test('is password valid', async (t) => {
	const result = await bcrypt.compare('password', await hash('password'))
	t.true(result)
})
