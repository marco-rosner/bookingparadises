import { render, screen } from '@testing-library/react';
import { BookingForm } from '..';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe("BookingForm", () => {
    test("place field label appears", () => {
        const label = "Search your paradise"
        
        render(<BookingForm />)

        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })

    test("start date field label appears", () => {
        const label = "Start Date"
        
        render(<BookingForm />)

        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })

    test("end date field label appears", () => {
        const label = "End Date"
        
        render(<BookingForm />)

        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })

    test("button text appears", () => {
        const buttonText = "Search"
        
        render(<BookingForm />)

        expect(screen.getByText(buttonText)).toBeInTheDocument()
    })
})