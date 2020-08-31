let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    //we first need to retrieve the data from an API.
    return fetch("https://criminals.glassdale.us/officers")
    //the info is brought in but is not in the correct format. We convert it to js with this command.
        .then(response => response.json())
        //we then need to "do something with the information"
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}