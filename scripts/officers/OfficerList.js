import { getOfficers, useOfficers } from './OfficerProvider.js';
import { OfficerHTML } from './Officer.js';

export const OfficerList = () => {
    getOfficers()
    .then(() => {
        const OfficerArray = useOfficers();
        console.log("officer list", OfficerArray);
       addOfficersToDom(OfficerArray)
    })
}

const addOfficersToDom = (anOfficerArray) => {
    const domElement = document.querySelector(".officersContainer");

    let HTMLArray = anOfficerArray.map(singleOfficer => {
        return OfficerHTML(singleOfficer);
    })
// console.log("HTML Array", HTMLArray)

domElement.innerHTML = HTMLArray.join("");
}