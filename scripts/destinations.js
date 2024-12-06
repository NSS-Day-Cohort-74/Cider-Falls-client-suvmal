import {getDestinations, getGuests, getServiceDestinations, getServices } from "./database.js"

const destinations = getDestinations();
const guests = getGuests();
const services = getServices();



const getDestinationServices = (destId) => 
    getServiceDestinations()
    .filter(({destinationId})=> destId === destinationId)
    .map(({serviceId})=> services.find(({id}) => id === serviceId).type)
    .map((name) => `<li>${name}</li>`)
    .join("")



const getGuestsInArea = (clickedElementId) =>
    guests.filter(({ destinationId }) => destinationId === parseInt(clickedElementId)).length

document.addEventListener(
    "click",
    (clickTarget) => {
        if (clickTarget.target.dataset.type === "destination") {
             window.alert(`There are  ${getGuestsInArea(clickTarget.target.dataset.id)} guests in this area.`)
        }
    }
);




export const destinationsList = () => 
    `${destinations.map(({id,section, name}) => `
                <div class="destination">
                    <h2
                        data-type="destination"
                        data-section="${section}"
                        data-id="${id}">${name}
                    </h2>
                    <ul>
                    ${getDestinationServices(id)}
                    </ul>
                </div>
                `)
                .join("")
            }
                `

