export interface Property {
    id: number;
    placeId: number;
    name: string;
    description: string;
    tags: string[];
    price: number;
    img: string;
}

export const properties: Property[] = [
    {
        id: 118729,
        placeId: 1,
        name: "Amazing apartament",
        description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
        tags: ['Ponta Verde', 'Maceió'],
        price: 999,
        img: '/src/assets/apt.jpg',
    },{
        id: 1109273,
        placeId: 2,
        name: "Gourgeous lounge",
        description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
        tags: ['Boa Viagem', 'Pernambuco'],
        price: 564,
        img: '/src/assets/lounge.jpg',
    },{
        id: 1073821,
        placeId: 3,
        name: "Flat",
        description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
        tags: ['Cabo Branco', 'Paraíba'],
        price: 748,
        img: '/src/assets/flat.jpg',
    },
    {
        id: 118730,
        placeId: 1,
        name: "Apartament by the beach",
        description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
        tags: ['Ponta Verde', 'Maceió'],
        price: 999,
        img: '/src/assets/apt2.jpg',
    },{
        id: 1109274,
        placeId: 2,
        name: "Amazing landscape",
        description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
        tags: ['Boa Viagem', 'Pernambuco'],
        price: 564,
        img: '/src/assets/lounge2.jpg',
    },{
        id: 1073822,
        placeId: 3,
        name: "Confortable Flat",
        description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
        tags: ['Cabo Branco', 'Paraíba'],
        price: 748,
        img: '/src/assets/flat2.jpg',
    }
]