/*
map over an array and display all notes from Note.js
*/

import {getNotes, useNotes} from "./NoteProvider.js";
import {NoteHTMLConverter} from './Note.js';

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector(".container")

const render = (noteObject) => {
    const notes = useNotes()
    contentTarget.innerHTML = notes.map((noteObject) => {
        return NoteHTMLConverter(noteObject)
    }).join("")
}

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}

eventHub.addEventListener("NoteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})