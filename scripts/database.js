const database = {
    guests: [
        { id: 1, name: "Emma Rodriguez", destinationId: 1 },
        { id: 2, name: "Liam Chen", destinationId: 2 },
        { id: 3, name: "Olivia Thompson", destinationId: 3 },
        { id: 4, name: "Noah Patel", destinationId: 4 },
        { id: 5, name: "Sophia Kim", destinationId: 5 },
        { id: 6, name: "Ethan Martinez", destinationId: 6 },
        { id: 7, name: "Ava Nguyen", destinationId: 1 },
        { id: 8, name: "Mason Gupta", destinationId: 2 },
        { id: 9, name: "Isabella Nakamura", destinationId: 3 },
        { id: 10, name: "Jackson Brown", destinationId: 4 },
        { id: 11, name: "Harper Singh", destinationId: 5 },
        { id: 12, name: "Lucas Garcia", destinationId: 6 },
        { id: 13, name: "Amelia Tanaka", destinationId: 6 },
        { id: 14, name: "Alexander Wright", destinationId: 5 },
        { id: 15, name: "Harper Sato", destinationId: 5 },
        { id: 16, name: "Elijah Fernandez", destinationId: 1 },
        { id: 17, name: "Mia Suzuki", destinationId: 2 },
        { id: 18, name: "Daniel O'Connor", destinationId: 2 },
        { id: 19, name: "Charlotte Lee", destinationId: 1 },
        { id: 20, name: "Benjamin Miller", destinationId: 1 }
    ],
    destinations: [
        { id: 1, name: "Lodge", section: "northwest" },
        { id: 2, name: "Lost Wolf Hiking Trail", section: "northern" },
        { id: 3, name: "Chamfort River", section: "northeast" },
        { id: 4, name: "Gander River", section: "southwest" },
        { id: 5, name: "Campgrounds", section: "southern" },
        { id: 6, name: "Pine Bluff Trails", section: "southeast" },
    ],
    services: [
        { id: 1, type: "lodging" },
        { id: 2, type: "parking" },
        { id: 3, type: "information" },
        { id: 4, type: "picnicking" },
        { id: 5, type: "rock climbing" },
        { id: 6, type: "rafting" },
        { id: 7, type: "canoeing" },
        { id: 8, type: "fishing" },
        { id: 9, type: "hiking" },
        { id: 10, type: "zip lines" }
    ],
    serviceDestinations: [
        { id: 1, destinationId: 1, serviceId: 1 },
        { id: 2, destinationId: 1, serviceId: 2 },
        { id: 3, destinationId: 1, serviceId: 3 },
        { id: 4, destinationId: 1, serviceId: 4 },
        { id: 5, destinationId: 2, serviceId: 9 },
        { id: 6, destinationId: 2, serviceId: 4 },
        { id: 7, destinationId: 2, serviceId: 5 },
        { id: 8, destinationId: 3, serviceId: 6 },
        { id: 9, destinationId: 3, serviceId: 7 },
        { id: 10, destinationId: 3, serviceId: 8 },
        { id: 11, destinationId: 4, serviceId: 8 },
        { id: 12, destinationId: 4, serviceId: 9 },
        { id: 13, destinationId: 5, serviceId: 3 },
        { id: 14, destinationId: 5, serviceId: 1 },
        { id: 15, destinationId: 5, serviceId: 2 },
        { id: 16, destinationId: 6, serviceId: 9 },
        { id: 17, destinationId: 6, serviceId: 4 },
        { id: 18, destinationId: 6, serviceId: 10 }
    ]
}



export const getGuests = () => 
     structuredClone(database.guests)

export const getDestinations = () =>
    structuredClone(database.destinations)

export const getServices = () => 
    structuredClone(database.services)

export const getServiceDestinations = () => 
    structuredClone(database.serviceDestinations)




