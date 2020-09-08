export const Witness = (witnessObj) => {
    return `
    <section id="witness-${witnessObj.id}" class="card-witness">
        <p><strong>Name:</strong> ${witnessObj.name}</p> 
        <p>Statement: ${witnessObj.statements}</p>
    </section>
    `
}