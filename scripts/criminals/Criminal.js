import {AlibiDialog} from './AlibiDialog.js'

const eventHub = document.querySelector('.container')

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")){
        const [prefix, criminalID] = event.target.id.split("--")

        const alibiEvent = new CustomEvent("accociatesClicked", {
            detail: {
                chosenCriminal: criminalID
            }
        })

        eventHub.dispatchEvent(alibiEvent)
    }
})

export const CriminalHTML = (criminalObj) => {
    return `
    <section id="officer-${criminalObj.id}" class="card-criminal">
        <p><strong>Name:</strong> ${criminalObj.name}</p>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction}</p>
        <p>Dates: ${ new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} - ${ new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <button id="associates--${criminalObj.id}">Alibis</button>
        ${AlibiDialog(criminalObj.id)}
    </section>
`
}