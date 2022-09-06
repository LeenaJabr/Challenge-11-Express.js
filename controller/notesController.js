const { readFromFile, readAndAppend, writeToFile } = require('../helper/fsUtils')
const uuid = require('../helper/uuid')


//GET 
const getNotes = (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
}

//POST
const setNote = (req, res) => {
    const { title, text } = req.body

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        }

        readAndAppend(newNote, './db/db.json')
        res.json('Tip added successfully')
    } else {
        res.errored('Error adding tip')
    }
}

//DELETE
const deleteNote = (req, res) => {
    const { noteId } = req.params

    readFromFile('./db/db.json').then((rawData) => {
        let data = JSON.parse(rawData)
        let index = 0
        for (; index < data.length; index++) {
            const element = data[index]
            console.log(element)
            if (element.id == noteId) {
                break
            }
        }
        data.splice(index, 1)
        writeToFile('./db/db.json', data)
        res.json(`Note ${noteId} deleted`)
    })
}

module.exports = {
    getNotes,
    setNote,
    deleteNote
}