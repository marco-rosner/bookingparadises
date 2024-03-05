import { render, screen } from '@testing-library/react';
import { AlertPopup } from './AlertPopup';

describe("AlertPopUp", () => {
    test("message appears", () => {
        const message = "Test"
        
        render(<AlertPopup open={true} message={message} severity={'error'} />)

        expect(screen.getByText(message)).toBeInTheDocument()
    })
})