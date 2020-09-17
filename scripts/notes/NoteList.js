/*
map over an array and display all notes from Note.js
*/

import {getNotes, useNotes} from "./NoteProvider.js";
import {NoteHTMLConverter} from './Note.js';
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector(".container")

const render = (notes, suspects) => {
    
    contentTarget.innerHTML = notes.map((noteObject) => {
    noteObject.suspectObject = suspects.find(suspect => {
        return suspect.id === parseInt(noteObject.suspectId)
    })
        return NoteHTMLConverter(noteObject)
    }).join("");
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals())
        .then(() => {
            const notes = useNotes();
            const suspects = useCriminals();
            render(notes, suspects)
        })
}

eventHub.addEventListener("NoteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes, useCriminals())
})