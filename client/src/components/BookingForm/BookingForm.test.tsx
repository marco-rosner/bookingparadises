import { render, screen } from '@testing-library/react';
import { BookingForm } from '..';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(["test"])
    })
) as jest.Mock

describe("BookingForm", () => {
    test("place field label appears", () => {
        const label = "bookingForm.searchLabel"

        render(<BookingForm />)

        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })

    test("start date field label appears", () => {
        const label = "bookingForm.startDate"

        render(<BookingForm />)

        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })

    test("end date field label appears", () => {
        const label = "bookingForm.endDate"

        render(<BookingForm />)

        expect(screen.getByLabelText(label)).toBeInTheDocument()
    })

    test("button text appears", () => {
        const buttonText = "bookingForm.search"

        render(<BookingForm />)

        expect(screen.getByText(buttonText)).toBeInTheDocument()
    })
})