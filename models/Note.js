const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title:{},
    content:{}
}, { timestamps: true, versionKey: false})

module.exports = mongoose.model('Note', NoteSchema)