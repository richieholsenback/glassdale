/*
Takes notes made and prepare to display on website
*/

const eventHub = document.querySelector('.container')

export const NoteHTMLConverter = (noteObj) => {
    return `
    <section class='note'>
        <h4 class='note-title'>Criminal: ${noteObj.suspect}</h4>
        <div class='note-content'>Note: ${noteObj.noteText}</div>
        <div class='note-timestamp'>Timestamp: ${new Date(noteObj.date).toLocaleDateString("en-us")}</div>
    </section>`
}