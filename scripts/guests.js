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
}) => type === "guest" && window.alert(`${locationId}`)
)

export const genGuestHtml = () => 
    `<ul>
        ${
            guests.map((guest) => `
                <li
                        data-type="guest"
                        data-locationId="${guest.destinationId}">
                        <h2>${guest.firstName} ${guest.lastName}</h2>
                </li>
                `)
                .join("")
            }
                </ul>
                `