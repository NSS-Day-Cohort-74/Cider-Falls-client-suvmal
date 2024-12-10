import { getGuests, getDestinations } from "./database.js";

const guests = getGuests();
const destinations = getDestinations();

export const getGuestDestination = (guestLocationId) =>
	destinations.find(({ id: destId }) => destId === parseInt(guestLocationId))
		.name;

document.addEventListener("click", (clickTarget) => {
	if (clickTarget.target.dataset.type === "guest") {
		window.alert(
			`This guest is at the ${getGuestDestination(clickTarget.target.dataset.locationid)}`,
		);
	}
});

export const genGuestHtml = (guestKey = guests) => `
        <ul><h2>Guests</h2>
        ${guestKey
					.map(
						({ id, destinationId, name }) => `
                <li id="guest-li"
                        data-type="guest"
                        data-locationId="${destinationId}"
                        data-id="${id}">
                        ${name} (${getGuestDestination(destinationId)})
                </li>
                `,
					)
					.join("")}
        </ul>
        `;
