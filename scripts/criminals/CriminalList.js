import { getCriminals, useCriminals } from './CriminalProvider.js'
import { CriminalHTML } from './Criminal.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    if ("crimeChosen" in event.detail) {
        const criminalArray = useCriminals()
        console.log("this is the criminal array", criminalArray)
        
        const filteredCriminalArray = criminalArray.filter(currentConviction => {
            return currentConviction.conviction = event.detail.crimeThatWasChosen
        })
        render(filteredCriminalArray)
    }
})



export const CriminalList = () => {
    getCriminals()
    .then(() =>{
        const CriminalArray = useCriminals();
        console.log("criminal list", CriminalArray);
        addCriminalsToDom(CriminalArray)
    })
}

const addCriminalsToDom = (aCriminalArray) => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = aCriminalArray.map(singleCriminal => {
        return CriminalHTML(singleCriminal)
    })

    // console.log(HTMLArray)

    domElement.innerHTML = HTMLArray.join("")
}
