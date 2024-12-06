import { getServices, getDestinations, getServiceDestinations} from "./database.js";

const services = getServices();
const destinations = getDestinations();
const serviceDestinations = getServiceDestinations()

const getServiceDestination = (id) => {
    const finalDestination = []
    const services = []
  for (const destination of serviceDestinations) {
    if (id == destination.serviceId) {
        finalDestination.push(destination.destinationId)
    }
  }

  for (const id of finalDestination) {
    services.push(destinations.find((dest) => dest.id === id).name)
  }

  return services.join(" and ");
}

document.addEventListener("click",
     ({
        target: {
            dataset: { type,name, id},
        },
     }) => type === "service" && window.alert(`${name} is available at ${getServiceDestination(id)}`))


export const genServices = () => `
        <p>
        Park Services:
        </p> 
        ${
            services.map(({type,id}) => `
                 <p
                 data-id="${id}"
                 data-type="service"
                 data-name="${type}"
                 >${type},</p>

            `
        ).join("")
}
    `





//services.id => destinationServices.serviceId === destinationServices.destinationId => destinations.name


//if (services.id == serviceDestinations.serviceId) then we get the serviceDestinations.destinationId then get destinations.name 