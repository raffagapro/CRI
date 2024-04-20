const turnos = [
    {
        id:1,
        date:new Date('2024-04-17T15:30:00').toLocaleDateString(),
        time:new Date('2024-04-17T15:30:00').toLocaleTimeString(),
        status: "active",
        user: {
            id: 1,
            name: "Fernando",
            email: "Fer@gmail.com",
            birthdate: "2024-04-17",
            nDni: "12646gbrtgrt"
        }
    },
    {
        id:2,
        date:new Date('2024-09-17T15:30:00').toLocaleDateString(),
        time:new Date('2024-09-17T15:30:00').toLocaleTimeString(),
        status: "active",
        user: {
            id: 1,
            name: "Fernando",
            email: "Fer@gmail.com",
            birthdate: "2024-04-17",
            nDni: "12646gbrtgrt"
        }
    },
    {
        id:3,
        date:new Date('2024-15-17T15:30:00').toLocaleDateString(),
        time:new Date('2024-15-17T15:30:00').toLocaleTimeString(),
        status: "active",
        user: {
            id: 1,
            name: "Fernando",
            email: "Fer@gmail.com",
            birthdate: "2024-04-17",
            nDni: "12646gbrtgrt"
        }
    }
]

export default turnos;