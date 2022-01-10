const fs = require('fs')
const archiver = require('archiver')
const execSync = require('child_process').execSync
const path = require('path')

/**
 *
 * @param {*} sourceDir
 * @param {*} outPath
 * @returns
 */
function getGitCommitHash() {
	return execSync('git rev-parse HEAD').toString().trim().slice(0, 7)
}

const latestGitHash = getGitCommitHash()

/**
 * @param {String} sourceDir: /some/folder/to/compress
 * @param {String} outPath: /path/to/created.zip
 * @returns {Promise}
 */

function zipDirectory(sourceDir, outPath) {
	const archive = archiver('zip', { zlib: { level: 9 } })
	const stream = fs.createWriteStream(outPath)

	return new Promise((resolve, reject) => {
		archive
			.directory(sourceDir, false)
			.on('error', (err) => reject(err))
			.pipe(stream)

		stream.on('close', () => resolve())
		archive.finalize()
	})
}

const nccDistDirectory = path.join(__dirname, '..', 'dist', 'ncc')
const nccBundlePath = path.join(__dirname, '..', 'dist', `ncc-${latestGitHash}.zip`)

zipDirectory(nccDistDirectory, nccBundlePath)
