const database = {
    guests: [
        { id: 1, firstName: "Emma", lastName: "Rodriguez", destinationId: 1 },
        { id: 2, firstName: "Liam", lastName: "Chen", destinationId: 2 },
        { id: 3, firstName: "Olivia", lastName: "Thompson", destinationId: 3 },
        { id: 4, firstName: "Noah", lastName: "Patel", destinationId: 4 },
        { id: 5, firstName: "Sophia", lastName: "Kim", destinationId: 5 },
        { id: 6, firstName: "Ethan", lastName: "Martinez", destinationId: 6 },
        { id: 7, firstName: "Ava", lastName: "Nguyen", destinationId: 1 },
        { id: 8, firstName: "Mason", lastName: "Gupta", destinationId: 2 },
        { id: 9, firstName: "Isabella", lastName: "Nakamura", destinationId: 3 },
        { id: 10, firstName: "Jackson", lastName: "Brown", destinationId: 4 },
        { id: 11, firstName: "Harper", lastName: "Singh", destinationId: 5 },
        { id: 12, firstName: "Lucas", lastName: "Garcia", destinationId: 6 },
        { id: 13, firstName: "Amelia", lastName: "Tanaka", destinationId: 6 },
        { id: 14, firstName: "Alexander", lastName: "Wright", destinationId: 5 },
        { id: 15, firstName: "Harper", lastName: "Sato", destinationId: 5 },
        { id: 16, firstName: "Elijah", lastName: "Fernandez", destinationId: 1 },
        { id: 17, firstName: "Mia", lastName: "Suzuki", destinationId: 2 },
        { id: 18, firstName: "Daniel", lastName: "O'Connor", destinationId: 2 },
        { id: 19, firstName: "Charlotte", lastName: "Lee", destinationId: 1 },
        { id: 20, firstName: "Benjamin", lastName: "Miller", destinationId: 1 }
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
    destinationServices: [
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

export const getDestinationServices = () => 
    structuredClone(database.destinationServices)