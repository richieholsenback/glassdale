import { useOfficers, getOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.filters__officer')

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        const officerArray = useOfficers()
        render(officerArray)
    })
}

const render = theOfficerArray => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect>
        <option value="0">Please select an officer</option>
        ${
            theOfficerArray.map(officerObject => {
                return `<option value="${officerObject.name}">${officerObject.name}</option>`
            }).join("")

        }
        </select> `
    }