interface Promotion {
    id: number,
    name: string,
    description: string,
    dates: string,
    price: number,
    img: string
}

export const promotions: Promotion[] = [{
    id: 118729,
    name: "Maceió",
    description: "Paradaise",
    dates: "December, January, February",
    price: 999,
    img: 'src/assets/beach.jpg',
},{
    id: 1109273,
    name: "Pernambuco",
    description: "Amazing beach",
    dates: "December, January, February",
    price: 564,
    img: 'src/assets/beach1.jpg',
},{
    id: 1073821,
    name: "Paraíba",
    description: "Wonderful beach",
    dates: "February, March",
    price: 748,
    img: 'src/assets/beach2.jpg',
},{
    id: 105312,
    name: "Natal",
    description: "Beautiful beach",
    dates: "June, July, August",
    price: 872,
    img: 'src/assets/beach3.jpg',
}]