import mongoose from 'mongoose'

const mongo = mongoose.connect('mongodb://localhost/test')

export { mongo }
