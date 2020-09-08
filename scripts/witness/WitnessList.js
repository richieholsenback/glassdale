import {getWitness, useWitness} from './WitnessProvider.js'
import { Witness } from './Witness.js'

export const witnessList = () => {
    getWitness()
    .then(() => {
        const witnessArray = useWitness()
        addWitnessToDom(witnessArray)
    })
}

const addWitnessToDom = (witnessCollection) => {
    //get a reference of where (DOM location) this list is put
    const domElement = document.querySelector('#witnessContainer')
    //loop through witnessCollection 
    let HTMLArray = witnessCollection.map(singleWitness => {
        //make HTML stuff for each one
        return Witness(singleWitness)
    }).join("")
    //add to innerHTML
    domElement.innerHTML += HTMLArray;
}