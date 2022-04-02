import { open } from 'sqlite'
import sqlite from 'sqlite3'
import path from 'path'

export async function slite() {
	const database = await open({
		// filename: path.resolve(__dirname, 'database.db'),
		filename: '/typecraft.db',
		driver: sqlite.Database,
	})
	return database
}
