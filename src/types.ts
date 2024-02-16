export interface Place {
    id: number,
    name: string,
    description?: string,
    tags?: string[]
}

export interface Property {
    id: number;
    placeId: number;
    name: string;
    description: string;
    tags: string[];
    price: number;
    img: string;
}

export interface Promotion {
    id: number,
    property: Property,
    price: number,
}

