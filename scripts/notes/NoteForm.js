/*
A bunch of input information related to the note information
*/

import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import {saveNote} from "./NoteProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('#noteFormContainer')

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote"){
        
        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if(noteCriminal.value !== 0){
        const newNote = {
            noteTest: noteContent.value,
            suspect: noteCriminal.value,
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
        <textarea id="noteForm--text" placeholder="Put a note here"></textarea>

        <select class="dropdown" id="noteForm--criminal">
                <option value="0">Please select a criminal...</option>
                ${
                    criminalArray.map(criminalObj => {
                        return `<option value="${criminalObj.name}">${criminalObj.name}</option>`
                    }).join("")
                }
            </select>
        

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        render(useCriminals())
    })
    
}