import { getGuests, getDestinations } from "./database.js";

const guests = getGuests();
const destinations = getDestinations();

const getGuestDestination = (guestId) =>
    destinations.find(({id})=> id === parseInt(guestId)).name

document.addEventListener(
    "click",
    (clickTarget) => {
        if (clickTarget.target.dataset.type === "guest") { 
            window.alert(`This guest is at the ${getGuestDestination(clickTarget.target.dataset.id)}`)
        }
    })

export const genGuestHtml = () => `
        <ul>
        ${  
            guests.map( ( {id, destinationId, firstName, lastName} ) => `
                <li id="guest-li">
                        <h2
                        data-type="guest"
                        data-locationId="${destinationId}"
                        data-id="${id}">
                        ${firstName} ${lastName}</h2>
                </li>
                `)
                .join("")
            }
        </ul>
        `