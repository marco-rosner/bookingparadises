export interface Place {
    id?: number,
    name: string,
    description?: string,
    tags?: string[],
    img: string
}

export const places: Place[] = [{
    id: 1,
    name: "Maceió",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
    tags: ['Beach', 'Brazil'],
    img: 'src/assets/beach.jpg',
},{
    id: 2,
    name: "Pernambuco",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
    tags: ['Beach', 'Brazil'],
    img: 'src/assets/beach1.jpg',
},{
    id: 3,
    name: "Paraíba",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
    tags: ['Beach', 'Brazil'],
    img: 'src/assets/beach2.jpg',
}]