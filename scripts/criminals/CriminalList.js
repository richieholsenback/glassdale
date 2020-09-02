import { getCriminals, useCriminals } from './CriminalProvider.js'
import { CriminalHTML } from './Criminal.js'

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail.crimeThatWasChosen) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter(m => m.event === event)

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals)
    }
})

const render = criminalCollection => {
    contentTarget.innerHTML = you_fill_this_in
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

// export const CriminalList = () => {
//     getCriminals()
//     .then(() =>{
//         const CriminalArray = useCriminals();
//         console.log("criminal list", CriminalArray);
//         addCriminalsToDom(CriminalArray)
//     })
// }

const addCriminalsToDom = (aCriminalArray) => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = aCriminalArray.map(singleCriminal => {
        return CriminalHTML(singleCriminal)
    })

    // console.log(HTMLArray)

    domElement.innerHTML = HTMLArray.join("")
}
