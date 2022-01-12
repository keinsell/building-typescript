import test from 'ava'
import bcrypt from 'bcrypt'

console.log = function () {}

import { main } from '../src'

test('is password valid', async (t) => {
	const result = await bcrypt.compare('password', main())
	t.true(result)
})
