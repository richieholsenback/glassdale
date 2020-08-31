/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    
    const convictions = useConvictions()

    const render = (convictionsCollection) => {

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
            convictionsCollection.map(convictionObj => {
                const convictionName = convictionObj.name
                return `<option>${convictionName}</option>`
            })
            }
            </select>
        `
    }

    render(convictions)
}