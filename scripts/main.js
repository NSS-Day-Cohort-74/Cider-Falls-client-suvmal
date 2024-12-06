import {genGuestHtml} from "./guests.js"
import { destinationsList } from "./destinations.js";


const container = document.querySelector("#container");

container.innerHTML = genGuestHtml()


const renderedDestinations = destinationsList()
const destinationsContainer = document.querySelector("#destinations")
destinationsContainer.innerHTML = renderedDestinations