import { render, screen } from '@testing-library/react';
import { TinyCard } from './TinyCard'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

const property = {
    id: 118729,
    placeId: 1,
    name: "Amazing apartament",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum ",
    tags: ['Ponta Verde', 'Maceió'],
    price: 50,
    img: '/src/assets/apt.jpg',
}

describe("TinyCard", () => {
    test("property image appears", () => {
        render(<TinyCard property={property} />)

        expect(screen.getByAltText(property.name)).toBeInTheDocument()
    })

    test("property name appears", () => {
        render(<TinyCard property={property} />)

        expect(screen.getByText(property.name)).toBeInTheDocument()
    })

    test("property tags appears", () => {
        render(<TinyCard property={property} />)
        const tags = property.tags.reduce((acc, cur) => acc = `${acc}, ${cur}`)
        expect(screen.getByText(tags)).toBeInTheDocument()
    })

    test("property price appears", () => {
        render(<TinyCard property={property} />)

        expect(screen.getByText(`$${property.price} per day`)).toBeInTheDocument()
    })


})