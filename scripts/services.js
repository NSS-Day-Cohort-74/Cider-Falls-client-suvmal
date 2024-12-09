import { getServices, getDestinations, getServiceDestinations } from "./database.js";


const services = getServices();
const destinations = getDestinations();
const serviceDestinations = getServiceDestinations()


const getServiceDestination = (serviceId) => 
  serviceDestinations
    .filter((obj) => obj.serviceId === parseInt(serviceId))
    .map((obj) => (destinations.find((dest) => dest.id === obj.destinationId).name))
    .join(" and ");



// const getServiceDestination = (id) => {
//   const finalDestination = []
//   const services = []
  
//   for (const destination of serviceDestinations) {
//     if (id == destination.serviceId) {
//       finalDestination.push(destination.destinationId)
//     }
//   }

//   for (const id of finalDestination) {
//     services.push(destinations.find((dest) => dest.id === id).name)
//   }
//   return services.join(" and ");
// }

document.addEventListener("click",
  ({
    target: {
      dataset: { type, name, id },
    },
  }) => type === "service" && window.alert(`${name} is available at ${getServiceDestination(id)}`))



    

export const genServices = () => `
        <p>Park Services: </p> 
        ${services.map(({ type, id }) => `
                 <p
                 data-id="${id}"
                 data-type="service"
                 data-name="${type}"
                 >${type}, </p>
                 `
          ).join("")
        }
        `

