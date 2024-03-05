import { render, screen } from '@testing-library/react';
import { promotions } from '../../__mocks__/promotions';
import { HighlightTrack } from './HighlightTrack';

jest.mock('../../hooks/usePromotions', () => ({
    usePromotions: () => ({ "data": promotions, "loading": false })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe("HighlightTrack", () => {
    test("title appears", () => {
        const title = "Test"

        render(<HighlightTrack title={title} />)

        expect(screen.getByText(title)).toBeInTheDocument()
    })

    test("highlight card appears", () => {
        render(<HighlightTrack />)

        expect(screen.getByText(promotions[0].property.name)).toBeInTheDocument()
    })
})