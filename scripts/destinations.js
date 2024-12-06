import {getDestinations, getGuests} from "./database.js"

const destinations = getDestinations();
const guests = getGuests();

const getGuestsInDest = (clickid) =>
    guests.filter(({ destinationId }) => destinationId === clickid).length

document.addEventListener(
    "click",
    ({
        target: {
        innerText,
        dataset:{
            type,
            section,
            id
        },
        },
}) => type === "destination" && window.alert(`${getGuestsInDest(id)}}`)
)



export const destinationsList = () => 
    `<ul>
        ${
            destinations.map(({id,section, name}) => `
                <li
                        data-type="destination"
                        data-section="${section}"
                        data-id="${id}">
                        <h2>${name}</h2>
                </li>
                `)
                .join("")
            }
                </ul>
                `

