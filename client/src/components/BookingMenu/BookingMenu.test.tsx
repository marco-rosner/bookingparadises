import { fireEvent, render, screen } from '@testing-library/react';
import { BookingMenu } from './BookingMenu';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe("BookingMenu", () => {
    test("call to action text appears", () => {
        const callToAction = "menu.reservation"

        render(<BookingMenu />)

        expect(screen.getByText(callToAction)).toBeInTheDocument()
    })

    test("avatar letter appears", () => {
        const letter = "U"

        render(<BookingMenu />)

        expect(screen.getByText(letter)).toBeInTheDocument()
    })

    test("manage menu item appears", () => {
        const text = "menu.manageBookings"
        const letter = "U"

        render(<BookingMenu />)

        const avatar = screen.getByText(letter)

        fireEvent.click(avatar) // open menu

        expect(screen.getByText(text)).toBeInTheDocument()
    })
})