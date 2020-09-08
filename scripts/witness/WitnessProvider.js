let witnesses = [];

export const getWitness = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(parsedResponse => {
        witnesses = parsedResponse;
    })
}

export const useWitness = () => {
    return witnesses.slice();
}