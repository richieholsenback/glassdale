import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions();
            console.log(convictions)

            eventHub.addEventListener("change", changeEvent => {

                if (changeEvent.target.id === "crimeSelect") {
                    const customEvent = new CustomEvent("crimeChosen", {
                        detail: {
                            crimeThatWasChosen: event.target.value
                        }
                    })
                    console.log(customEvent)

                    eventHub.dispatchEvent(customEvent)
                }
            })



            const render = (convictionsCollection) => {
                contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(convictionObj => {
                        const convictionName = convictionObj.name
                        return `<option id="convictionName--${convictionName}">${convictionName}</option>`
                    })
                    }
            </select>
        `
            }

            render(convictions)
        })
}