import {getDestinations, getGuests, getServiceDestinations, getServices } from "./database.js"

const destinations = getDestinations();
const guests = getGuests();
const services = getServices();
const serviceDestinations = getServiceDestinations();


const getDestinationServices = (destId) => 
    serviceDestinations
    .filter((serviceDestination) => serviceDestination.destinationId === destId)
    .map((serviceDestination) => services.find((service) => service.id === serviceDestination.serviceId).type)
    .map((type) => `<li>${type}</li>`)
    .join("");

// const getDestinationServices = (destId) => {
//     const filteredSd = [] 
//     const mappedArray = []
//     const finalArray = []
//     for (const sd of serviceDestinations) {
//             if(sd.destinationId === destId) {
//                 filteredSd.push(sd)
//             }
//         }
//     for (const sd of filteredSd) {
//         for (const service of services) {
//             if (sd.serviceId === service.id) {
//                 mappedArray.push(service.type)
//             }
//         }
//     }
//     for (const name of mappedArray) {
//         finalArray.push(`<li>${name}</li>`)
//     }
//     return finalArray.join("")
// }
        


const getGuestsInArea = (clickedElementId) =>
    guests.filter((guest) => guest.destinationId === parseInt(clickedElementId)).length

document.addEventListener(
    "click",
    (clickTarget) => {
        if (clickTarget.target.dataset.type === "destination") {
             window.alert(`There are  ${getGuestsInArea(clickTarget.target.dataset.id)} guests in this area.`)
        }
    }
);




export const createDestinationsList = () => 
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

