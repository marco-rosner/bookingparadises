export interface Place {
    id?: number,
    name: string,
    description?: string,
    tag?: string,
    dates?: string,
    price: number,
    img: string
}

export const places: Place[] = [{
    id: 118729,
    name: "Maceió",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
    tag: 'Beach, Brazil',
    dates: "December, January, February",
    price: 999,
    img: 'src/assets/beach.jpg',
},{
    id: 1109273,
    name: "Pernambuco",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
    tag: 'Beach, Brazil',
    dates: "December, January, February",
    price: 564,
    img: 'src/assets/beach1.jpg',
},{
    id: 1073821,
    name: "Paraíba",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
    tag: 'Beach, Brazil',
    dates: "February, March",
    price: 748,
    img: 'src/assets/beach2.jpg',
}]