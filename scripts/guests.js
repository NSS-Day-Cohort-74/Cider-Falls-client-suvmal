import { getGuests } from "./database.js";

const guests = getGuests();

document.addEventListener(
    "click",
    ({
        target: {
        innerText,
        dataset:{
            type,
            locationId
        },
        },
}) => type === "guest" && window.alert(`${locationId}`))

export const genGuestHtml = () => 
    `<ul>
        ${
            guests.map(({id,destinationId, firstName, lastName}) => `
                <li
                        data-type="guest"
                        data-locationId="${destinationId}"
                        data-id="${id}">
                        <h2>${firstName} ${lastName}</h2>
                </li>
                `)
                .join("")
            }
                </ul>
                `