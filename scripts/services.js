import {
	getServices,
	getDestinations,
	getServiceDestinations,
} from "./database.js";

const services = getServices();
const destinations = getDestinations();
const serviceDestinations = getServiceDestinations();

const getServiceDestination = (serviceId) =>
	serviceDestinations
		.filter((obj) => obj.serviceId === parseInt(serviceId))
		.map(
			(obj) => destinations.find((dest) => dest.id === obj.destinationId).name,
		)
		.join(" and ");

document.addEventListener(
	"click",
	({
		target: {
			dataset: { type, name, id },
		},
	}) =>
		type === "service" &&
		window.alert(`${name} is available at ${getServiceDestination(id)}`),
);

export const genServices = () => `
        <p><b>Park Services:&nbsp; </b></p> 
        ${services
					.map(
						({ type, id }, index) => `
                 <p
                 class="service"
                 data-id="${id}"
                 data-type="service"
                 data-name="${type}"
                 >${type}${index < services.length - 1 ? ",&nbsp;" : ""}</p>
                 `,
					)
					.join("")}
        `;

// export const genServices = () => `
//         <p>Park Services: </p>
//         ${services.map(({ type, id }) => `
//                  <p
//                  data-id="${id}"
//                  data-type="service"
//                  data-name="${type}"
//                  >${type}, </p>
//                  `
//           ).join("")
//         }
//         `
