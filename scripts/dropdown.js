import { getDestinations, getGuests } from "./database.js";
import { getGuestDestination } from "./guests.js";

const destinations = getDestinations();
const guests = getGuests();

document.addEventListener(
	"click",
	({
		target: {
			innerHtml,
			dataset: { type },
		},
	}) => {
		if (type === "button") {
			const chosenGuest = document.querySelector("#guest").value;
			const chosenDest = document.querySelector("#destination").value;
			const chosenDestId = destinations.find(
				(dest) => dest.name === chosenDest,
			).id;
			document.querySelector("#guests").innerHTML = updateData(
				chosenGuest,
				chosenDestId,
			);
		}
	},
);

const updateData = (guestName, newDestinationId) => {
	guests.find((guest) => guest.name === guestName).destinationId =
		newDestinationId;
	return `<ul><h2>Guests</h2>
          ${guests
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
};

export const createDropdowns = () => {
	const genDropdown = (dbKey, dbName) => `
    <div class="dropdown">
        <label for="${dbName}">Choose ${dbName}:</label>
            <select id="${dbName}"name="${dbName}" class="dropdown">
                <option value="${dbName}-default">choose:</option>
                 ${dbKey
										.map(
											({ name }) => `
                 <option value="${name}">${name}</option>`,
										)
										.join("")}
            </select>
    </div>`;
	const genButton = () =>
		`<button data-type="button" id="move-button">Move</button>`;

	return `${genDropdown(guests, "guest")} ${genDropdown(destinations, "destination")}${genButton()}`;
};

