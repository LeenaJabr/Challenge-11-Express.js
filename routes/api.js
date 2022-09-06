const express = require('express')
const { getNotes, setNote, deleteNote } = require('../controller/notesController')

const router = express.Router()

router.route('/').get(getNotes).post(setNote)
router.route('/:noteId').delete(deleteNote)


module.exports = router