import {getServices} from "./database.js"
import { getServiceDestinations } from "./database.js"
const serviceDestinations = getServiceDestinations()
const services = getServices()


 const getDestinationServices = (serviceId) => {
    console.log(serviceDestinations.forEach((obj) => services.push(obj))
//     console.log(services)
//     const filteredSd = services.filter(({id}) => id > 3)
//     console.log(filteredSd)
//     const blah = filteredSd.map((obj) => (obj.type))
//     console.log(blah)
//     const blahcanoe = blah.find((str) => str === "canoeing")

//     console.log(blahcanoe)
    
 }

getDestinationServices(2)
