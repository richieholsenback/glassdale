import {AlibiDialog} from './AlibiDialog.js'

const eventHub = document.querySelector('.container')

eventHub.addEventListener("click", clickEvent => {
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
    <section id="criminal-${criminalObj.id}" class="card-criminal">
        <h2>Name: ${criminalObj.name}</h2>  
            <ul>
                <li>Age: ${criminalObj.age}</li>
                <li>Conviction: ${criminalObj.conviction}</li>
                <li>Dates of Incarceration: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</li>
            </ul> 
            <button id="associates--${criminalObj.id}">Alibis</button>
            ${AlibiDialog(criminalObj.id)}
    </section>
    `
}