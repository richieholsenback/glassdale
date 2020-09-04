import {CriminalHTML} from './Criminal.js';
import {getCriminals, useCriminals} from './CriminalProvider.js';

const eventHub = document.querySelector(".container");
//the list needs to listen for the custom event
eventHub.addEventListener("crimeChosen", event => {
	//get selected one of officer
	const contentTarget = document.querySelector("#officerChosen")
	console.log("what officer is selected?", contentTarget.value);
	
	if (event.detail.crimeThatWasChosen !== "0"){
		//filter
		const matchingCriminals = useCriminals().filter(singleCriminal => {
			return singleCriminal.conviction === event.detail.crimeThatWasChosen
		});
		//invoke render with filter result
		render(matchingCriminals)
	}else{
		render(useCriminals())
	}
})

eventHub.addEventListener("officerChosen", event =>{
	if (event.detail.officerThatWasChosen !== "0"){
		const matchingCriminals = useCriminals().filter(singleCriminal => {
			return singleCriminal.arrestingOfficer === event.detail.officerThatWasChosen
		});
		render(matchingCriminals)
	}else{
		render(useCriminals())
	}
})

export const CriminalList = () => {
	getCriminals()
	.then(()=> {
		const criminalArray = useCriminals();
		console.log("criminalArray", criminalArray);
		render(criminalArray);
	})
}

const render = (aCriminalArray) => {
	const domElement = document.querySelector(".criminalsContainer");
	// addSelectToTheDOM();
	let HTMLArray = aCriminalArray.map(singleCriminal => {
		return CriminalHTML(singleCriminal);
	})
	domElement.innerHTML = HTMLArray.join("");
}
