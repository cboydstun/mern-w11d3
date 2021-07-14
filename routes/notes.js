const router = require('express').Router()

//import model
const Note = require('../models/Note')

//@GET - /api/notes - get all notes - Public
router.get('/', async(req, res) =>{
    try {
        const notes = await Note.find({})
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
})

//@POST - /api/notes - post a new note - Public
router.post('/', async(req, res) =>{
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })

    try {
        const savedNote = await newNote.save()
        res.json(savedNote)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router;