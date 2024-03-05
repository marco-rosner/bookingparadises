import { render, screen } from '@testing-library/react';
import { properties } from '../../__mocks__/properties';
import { TinyTrack } from './TinyTrack';

jest.mock('../../hooks/useProperties', () => ({
    useProperties: () => ({ "data": properties, "loading": false })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe("TinyTrack", () => {
    test("title appears", () => {
        const title = "Test"

        render(<TinyTrack title={title} />)

        expect(screen.getByText(title)).toBeInTheDocument()
    })

    test("Tiny card appears", () => {
        const title = "Test"

        render(<TinyTrack title={title} />)

        expect(screen.getByText(properties[4].name)).toBeInTheDocument()
    })
})