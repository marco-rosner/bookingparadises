import { render, screen } from '@testing-library/react';
import { HighlightCard } from './HighlightCard';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

const property = {
    id: 118729,
    placeId: 1,
    name: "Amazing apartament",
    description: "Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum",
    tags: ['Ponta Verde', 'Maceió'],
    price: 50,
    img: '/src/assets/apt.jpg',
}

describe("HighlightCard", () => {
    test("property image appears", () => {
        render(<HighlightCard property={property} />)

        expect(screen.getByAltText(property.name)).toBeInTheDocument()
    })

    test("property name appears", () => {
        render(<HighlightCard property={property} />)

        expect(screen.getByText(property.name)).toBeInTheDocument()
    })

    test("property description appears", () => {
        render(<HighlightCard property={property} />)

        expect(screen.getByText(property.description)).toBeInTheDocument()
    })


})