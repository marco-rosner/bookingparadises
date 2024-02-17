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

export interface BookingInterface {
    id: number;
    status?: BookingStatus;
    property?: Property;
    startDate?: Date;
    endDate?: Date;
    price?: number;
}

export enum BookingStatus {
    Pending = "PENDING",
    Confirmed = "CONFIRMED"
}

export interface StartEndDates {
    startDate?: Date;
    endDate?: Date;
}