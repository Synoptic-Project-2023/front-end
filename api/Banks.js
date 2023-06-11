
/*
    Food Banks have:

    name,

    location: { 
        latitude, 
        longitude, 
        latitudeDelta, 
        longitudeDelta 
    },

    filters: [

	    0: "kosher",
        1: "halal",
        2: "vegan",
        3: "vegetarian",
        4: "peskitarian",
    ]
*/

const Banks = [

    {
        name: "Glasgow South West Foodbank",
        location: {
            latitude: 55.84991575627262,
            longitude: - 4.301230319640668,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        lastUpdated: new Date(),
        filters: [
            true,
            true,
            true,
            true,
        ]
    },
    {
        name: "Salvation Army",
        location: {
            latitude: 55.86345940907452,
            longitude: - 4.318126157698128,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        lastUpdated: new Date(),
        filters: [
            true,
            true,
            false,
            false,
        ]
    },
    {
        name: "Salvation Army",
        location: {
            latitude: 55.86345940907452,
            longitude: - 4.318126157698128,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        lastUpdated: new Date(),
        filters: [
            true,
            true,
            false,
            false,
        ]
    },
    {
        name: "Salvation Army",
        location: {
            latitude: 55.86345940907452,
            longitude: - 4.318126157698128,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        lastUpdated: new Date(),
        filters: [
            true,
            true,
            false,
            false,
        ]
    },
    {
        name: "Salvation Army",
        location: {
            latitude: 55.86345940907452,
            longitude: - 4.318126157698128,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        lastUpdated: new Date(),
        filters: [
            true,
            true,
            false,
            false,
        ]
    },
    {
        name: "Salvation Army",
        location: {
            latitude: 55.86345940907452,
            longitude: - 4.318126157698128,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
        lastUpdated: new Date(),
        filters: [
            true,
            true,
            false,
            false,
        ]
    }
]

export default Banks;
