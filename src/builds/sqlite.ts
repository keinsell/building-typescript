import { open } from 'sqlite'
import sqlite from 'sqlite3'

export async function slite() {
	const database = await open({
		filename: 'database.db',
		driver: sqlite.Database,
	})
	return database
}
