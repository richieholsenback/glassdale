import { getCriminals, useCriminals } from './CriminalProvider.js'
import { CriminalHTML } from './Criminal.js'

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

    console.log(HTMLArray)

    domElement.innerHTML = HTMLArray.join("")
}
