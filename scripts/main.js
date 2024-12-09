import {genGuestHtml} from "./guests.js";
import { createDestinationsList } from "./destinations.js";
import {genServices} from "./services.js";

const destinationsContainer = document.querySelector("#destinations");
const guestContainer = document.querySelector("#guests");
const serviceContainer = document.querySelector("#services-div");



serviceContainer.innerHTML = genServices()

guestContainer.innerHTML = genGuestHtml()

destinationsContainer.innerHTML = createDestinationsList()