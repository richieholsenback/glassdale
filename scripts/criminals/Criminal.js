export const CriminalHTML = (criminalObj) => {
    return `
    <section id="criminal-${criminalObj.id}" class="card-criminal">
        <h2>Name: ${criminalObj.name}</h2>  
            <ul>
                <li>Age: ${criminalObj.age}</li>
                <li>Conviction: ${criminalObj.conviction}</li>
                <li>Dates of Incarceration: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} - ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</li>
            </ul> 
    </section>
    `
}