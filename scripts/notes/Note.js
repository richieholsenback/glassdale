/*
Takes notes made and prepare to display on website
*/

const eventHub = document.querySelector('.container')

export const NoteHTMLConverter = (noteObject) => {
    return `
    <section class="note">
    <div class="note--title"><strong>Suspect: ${ noteObject.suspectObject.name }</strong></div>
        <div class="note--timestamp">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
        <div class="note--content">Note: ${ noteObject.noteText }</div>
        <button id="deleteNote--${noteObject.id}">Delete</button>
    </section>
`
}