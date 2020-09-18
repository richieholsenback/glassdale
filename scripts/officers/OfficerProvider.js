let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    //we first need to retrieve the data from an API.
    return fetch("https://criminals.glassdale.us/officers")  
        .then(response => response.json())        
        .then(
            parsedOfficers => {                
                officers = parsedOfficers
            }
        )
}