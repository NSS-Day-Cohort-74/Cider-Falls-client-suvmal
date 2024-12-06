import {getDestinations, getGuests} from "./database.js"

const destinations = getDestinations();

const guests = getGuests();




export const destinationsList = () => {


    let destinationsHTML = "<ul>"

    for (const destination of destinations) {

        destinationsHTML += `

        <li data-type="destination" 
        data-section="${destination.section}"
        >${destination.name}</li>
        `
    }

    destinationsHTML += "</ul>"

    return destinationsHTML
}