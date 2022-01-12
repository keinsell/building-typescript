import bcrypt from 'bcrypt'

export async function hash(text) {
	const salt = bcrypt.genSaltSync(5)
	const hash = bcrypt.hashSync(text, salt)
	console.log(hash)
	return hash
}
