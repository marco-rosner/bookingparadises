import { properties, Property } from "./properties"

export interface Promotion {
    id: number,
    property: Property,
    price: number,
}

export const promotions: Promotion[] = [{
    id: 118729,
    property: properties[0],
    price: 999,
},{
    id: 1109273,
    property: properties[1],
    price: 564,
},{
    id: 1073821,
    property: properties[2],
    price: 748,
}]