import { getCriminals, useCriminals } from './CriminalProvider.js'
import { CriminalHTML } from './Criminal.js'

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeThatWasChosen" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const criminalArray = getCriminals()
        console.log("This is the criminal array", criminalArray)

        const filteredCriminalArray = criminalArray.filter(currentConviction => {

            return currentConviction.conviction === event.detail.crimeThatWasChosen
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
        render(filteredCriminalArray)
    }
})


export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const CriminalArray = useCriminals();
            console.log("criminal list", CriminalArray);
            render(CriminalArray)
        })
}

const render = (aCriminalArray) => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = aCriminalArray.map(singleCriminal => {
        return CriminalHTML(singleCriminal)
    })

    // console.log(HTMLArray)

    domElement.innerHTML = HTMLArray.join("")
}
