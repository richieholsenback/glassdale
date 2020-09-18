/*
A bunch of input information related to the note information
*/

import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import {saveNote} from "./NoteProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('#noteFormContainer')

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNoteButton"){
        
        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if(noteCriminal.value !== "0"){
        const newNote = {
            noteText: noteContent.value,
            suspectId: parseInt(noteCriminal.value),
            date: Date.now()
            }
            
            saveNote(newNote);

        } else {
            window.alert("Choose a suspect")
        }

    }
})


const render = (criminalArray) => {
    contentTarget.innerHTML = `
        <h3>New Note</h3>
        <div id="noteFormFields">
            <select class="dropdown" id="noteForm--criminal">
                    <option value="0">Please select a criminal...</option>
                    ${
                        criminalArray.map(criminalObj => {
                            return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
                        }).join("")
                    }
            </select>
            <textarea id="noteForm--text" placeholder="Put a note here"></textarea>
            <button type="button "id="saveNoteButton">Save Note</button>
        </div>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        render(useCriminals())
    })
    
}