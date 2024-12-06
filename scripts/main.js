import {genGuestHtml} from "./guests.js"
import { destinationsList } from "./destinations.js";

const destinationsContainer = document.querySelector("#destinations")
const guestContainer = document.querySelector("#guests");





guestContainer.innerHTML = genGuestHtml()

destinationsContainer.innerHTML = destinationsList()